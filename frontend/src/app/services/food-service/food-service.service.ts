import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFood, IFoodWithCategory } from 'src/app/common/interfaces';
import { Api } from 'src/app/helpers/constants';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ModalService } from '..';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  foodsWithCategorySource = new BehaviorSubject<IFoodWithCategory[]>([
    {
      id: '',
      title: '',
      hidden: false,
      parentId: '',
      food: [
        {
          id: '',
          name: '',
          description: '',
          hidden: false,
          categoryId: '',
          image: '',
          portions: [{ price: 0, weight: 0 }],
        },
      ],
      childrenCategory: [],
    },
  ]);

  foodsSource = new BehaviorSubject<IFood[]>([
    {
      id: '',
      name: '',
      description: '',
      hidden: false,
      categoryId: '',
      image: '',
      portions: [{ price: 0, weight: 0 }],
    },
  ]);
  foodRequestSource = new BehaviorSubject({ getParams: '' });
  foodErrorMessage = new BehaviorSubject({
    massage: '',
    ok: true,
  });

  currentErrorMessage = this.foodErrorMessage.asObservable();
  foodsContent = this.foodsSource.asObservable();
  foodsWithCategoryContent = this.foodsWithCategorySource.asObservable();
  foodRequestContent = this.foodRequestSource.asObservable();

  constructor(private http: HttpClient, private modalService: ModalService) {}

  get getParams(): string {
    return this.foodRequestSource.value.getParams;
  }

  public setErrorMessage(newMessage: string): void {
    this.foodErrorMessage.next({
      ...this.foodErrorMessage.value,
      massage: newMessage,
    });
  }

  public setErrorStatus(newStatus: boolean): void {
    this.foodErrorMessage.next({
      ...this.foodErrorMessage.value,
      ok: newStatus,
    });
  }

  public setRequestParams(newParams: string): void {
    this.foodRequestSource.next({ getParams: newParams });
  }
  public getFoodList(): void {
    const params = this.getParams;
    this.http
      .get<IFoodWithCategory[] | IFood[]>(`${Api.food}${params}`)
      .subscribe(
        (foodList: any) => {
          this.setErrorStatus(true);
          if (foodList[0].hasOwnProperty('categoryId')) {
            this.foodsSource.next(foodList);
          } else {
            this.foodsWithCategorySource.next(foodList);
          }
        },
        (err) => {
          this.setErrorStatus(err.ok);
        },
      );
  }

  public createFood(body: FormData, callback?: () => void): void {
    this.http
      .post<IFood>(`${Api.food}`, body)
      .pipe(
        finalize(() => {
          callback!();
        }),
      )
      .subscribe(
        () => this.updateFoodState(),
        (err) => {
          this.setErrorMessage(err.error.message);
        },
      );
  }
  public updateFood(id: string, body: FormData, callback?: () => void): void {
    this.http
      .patch<IFood>(`${Api.food}/${id}`, body)
      .pipe(
        finalize(() => {
          callback!();
        }),
      )
      .subscribe(
        () => this.updateFoodState(),
        (err) => {
          this.setErrorMessage(err.error.message);
        },
      );
  }

  public deleteFoodById(id: string) {
    this.http.delete<string>(`${Api.food}/${id}`).subscribe(() => {
      this.modalService.changeOpenState(false);
      this.getFoodList();
    });
  }

  public setVisibility(id: string, newVisibility: boolean): void {
    const formData = new FormData();
    formData.append(
      'data',
      JSON.stringify({
        hidden: newVisibility,
      }),
    );
    this.http
      .patch<IFood[]>(`${Api.food}/${id}`, formData)
      .subscribe(() => this.getFoodList());
  }
  
  public updateFoodState = (): void => {
    this.setErrorMessage('');
    this.modalService.changeOpenState(false);
    this.getFoodList();
  };
}
