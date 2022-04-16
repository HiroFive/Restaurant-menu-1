import { Component, Input } from '@angular/core';
import { ICategory, IFood } from 'src/app/common/interfaces';
import { CategoryService, FoodService } from 'src/app/services';

@Component({
  selector: 'app-show-hide-button',
  templateUrl: './show-hide-button.component.html',
  styleUrls: ['./show-hide-button.component.scss'],
})
export class ShowHideButtonComponent {
  @Input() category!: ICategory;
  @Input() food!: IFood;
  constructor(
    private categoryService: CategoryService,
    private foodService: FoodService,
  ) {}

  public changeVisibility(): void {
    if (this.food !== undefined) {
      this.foodService.setVisibility(this.food.id, !this.food.hidden);
    }
    if (this.category !== undefined) {
      this.categoryService.setVisibility(
        this.category.id,
        !this.category.hidden,
      );
    }
  }
  public checkHiddenState() {
    if (this.category === undefined) {
      return this.food.hidden;
    } else {
      return this.category.hidden;
    }
  }
}
