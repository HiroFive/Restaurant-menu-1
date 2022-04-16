import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ICustomRouter } from 'src/app/common/interfaces';
import { FoodService } from '..';

@Injectable({
  providedIn: 'root',
})
export class CustomRouterService {
  routerState = new BehaviorSubject<ICustomRouter>({
    currentUrl: '',
    qpCategory: '',
    currentRootUrl: '',
  });

  currentRouteState = this.routerState.asObservable();

  constructor(private foodService: FoodService, private router: Router) {}

  public setRootUrl() {
    this.routerState.next({
      ...this.routerState.value,
      currentRootUrl: this.router.url.split('?')[0],
    });
  }

  public setQpCategory(newValue: string) {
    this.routerState.next({
      ...this.routerState.value,
      qpCategory: newValue,
    });
  }

  public setCurrentUrl(newValue: string) {
    this.routerState.next({
      ...this.routerState.value,
      currentUrl: newValue,
    });
  }

  public filterParamsByCategory(isAdmin: boolean = true): void {
    const role = isAdmin ? 'admin' : 'user';
    switch (this.routerState.value.qpCategory) {
      case undefined:
        this.foodService.setRequestParams(`/category?role=${role}`);
        break;
      case 'null':
        this.foodService.setRequestParams(`?categoryId=null&role=${role}`);
        break;
      default:
        this.foodService.setRequestParams(
          `/category?id=${this.routerState.value.qpCategory}&role=${role}`,
        );
        break;
    }
  }
  
  public navigateToRoot(): void {
    this.router.navigateByUrl(this.routerState.value.currentRootUrl);
  }
  public navigateWithQueryParams(queryParams: { [key: string]: string }): void {
    this.router.navigate([this.routerState.value.currentRootUrl], {
      queryParams: queryParams,
    });
  }
}
