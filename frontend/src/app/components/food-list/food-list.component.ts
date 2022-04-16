import { Component, OnInit, Input, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CustomRouterService,
  FoodService,
  ModalService,
} from 'src/app/services';
import {
  ICustomRouter,
  IFood,
  IFoodWithCategory,
} from 'src/app/common/interfaces';
import { BaseCategory, Category } from 'src/app/common/classes';
import { AddSubCategoryComponent } from '../common/forms';
import { EditCategoryComponent } from '../common/forms/category-crud/edit-category/edit-category.component';
import { AddFoodComponent } from '../common/forms/food-crud/add-food/add-food.component';
import { CategoryDeleteComponent } from '../common/forms/delete';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  @Input() role!: 'user' | 'admin';

  routerState!: ICustomRouter;
  foodsWithCategory!: IFoodWithCategory[];
  foods!: IFood[];
  showSearch!: boolean;
  isAdmin!: boolean;
  isFound!: boolean;

  constructor(
    private router: Router,
    private customRouterService: CustomRouterService,
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private modalService: ModalService,
    private inj: Injector,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.customRouterService.setQpCategory(
      this.activatedRoute.snapshot.queryParams.category,
    );
  }

  ngOnInit(): void {
    this.isAdmin = this.role === 'admin';
    this.customRouterService.currentRouteState.subscribe((value) => {
      this.showSearch =
        value.currentUrl === '/home' ||
        value.currentUrl === '/admin' ||
        value.currentUrl === '/'
          ? false
          : true;
      this.routerState = value;
    });
    this.foodService.foodsWithCategoryContent.subscribe((response) => {
      this.foodsWithCategory = response;
    });
    this.foodService.foodsContent.subscribe((response) => {
      this.foods = response;
    });

    this.customRouterService.filterParamsByCategory(this.isAdmin);
    this.foodService.getFoodList();

    this.foodService.foodErrorMessage.subscribe((val) => {
      this.isFound = val.ok;
    });
  }

  public createCategory = (category: any): void => {
    const injector: Injector = Injector.create({
      providers: [
        {
          provide: BaseCategory,
          useValue: new Category(category.title, category.hidden, category.id),
        },
      ],
      parent: this.inj,
    });
    this.modalService.openNewModal(
      AddSubCategoryComponent,
      'Create new subcategory',
      injector,
    );
  };

  public createFood = (category: any): void => {
    const injector: Injector = Injector.create({
      providers: [
        {
          provide: BaseCategory,
          useValue: new Category('', false, category.id),
        },
      ],
      parent: this.inj,
    });
    this.modalService.openNewModal(
      AddFoodComponent,
      'Create new dish',
      injector,
    );
  };

  public editCategory = (category: any): void => {
    const injector: Injector = Injector.create({
      providers: [
        {
          provide: BaseCategory,
          useValue: new Category(
            category.title,
            category.hidden,
            category.id,
            category.parentId,
          ),
        },
      ],
      parent: this.inj,
    });
    this.modalService.openNewModal(
      EditCategoryComponent,
      'Edit category',
      injector,
    );
  };

  public deleteCategory = (id: string): void => {
    const injector: Injector = Injector.create({
      providers: [
        {
          provide: BaseCategory,
          useValue: new Category('', false, id),
        },
      ],
      parent: this.inj,
    });
    this.modalService.openNewModal(
      CategoryDeleteComponent,
      'Delete category',
      injector,
    );
  };
}
