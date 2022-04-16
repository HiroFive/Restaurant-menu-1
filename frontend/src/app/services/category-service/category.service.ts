import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory, ICategoryWithChildren } from 'src/app/common/interfaces';
import { Api } from 'src/app/helpers/constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FoodService, ModalService } from '..';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categoryForMenuSource = new BehaviorSubject<ICategory[]>([
    {
      id: '',
      title: '',
      hidden: false,
      parentId: '',
    },
  ]);
  categoryErrorMessage = new BehaviorSubject({
    massage: '',
  });

  currentErrorMessage = this.categoryErrorMessage.asObservable();
  categoryForMenuContent = this.categoryForMenuSource.asObservable();

  constructor(
    private http: HttpClient,
    private foodService: FoodService,
    private modalService: ModalService,
  ) {}

  public getCategoryForSidebar(isAdmin: boolean): void {
    this.http
      .get<ICategory[]>(
        `${Api.category}/for-menu?role=${isAdmin ? 'admin' : 'user'}`,
      )
      .subscribe((category) => this.categoryForMenuSource.next(category));
  }

  public getChildrenCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${Api.category}/children-category`);
  }

  public setVisibility(id: string, newVisibility: boolean): void {
    this.http
      .patch<ICategoryWithChildren[]>(`${Api.category}/${id}`, {
        hidden: newVisibility,
      })
      .subscribe(() => this.updateState());
  }

  public updateCategory(
    id: string,
    data: ICategory,
    callback?: () => void,
  ): void {
    this.http
      .patch<ICategoryWithChildren[]>(`${Api.category}/${id}`, data)
      .pipe(
        finalize(() => {
          callback!();
        }),
      )
      .subscribe(
        () => this.updateCategoriesState(),
        (err) => this.setErrorMessage(err.error.message),
      );
  }

  public addCategory(category: ICategory, callback?: () => void): void {
    this.http
      .post<ICategory>(`${Api.category}`, category)
      .pipe(
        finalize(() => {
          callback!();
        }),
      )
      .subscribe(
        () => this.updateCategoriesState(),
        (err) => this.setErrorMessage(err.error.message),
      );
  }

  public deleteCategory(id: string): void {
    this.http.delete<string>(`${Api.category}/${id}`).subscribe(() => {
      this.modalService.changeOpenState(false);
      this.updateState();
    });
  }
  
  public updateCategoriesState = (): void => {
    this.setErrorMessage('');
    this.modalService.changeOpenState(false);
    this.updateState();
  };

  public updateState(): void {
    this.getCategoryForSidebar(true);
    this.foodService.getFoodList();
  }

  public setErrorMessage(newMessage: string): void {
    this.categoryErrorMessage.next({ massage: newMessage });
  }
}
