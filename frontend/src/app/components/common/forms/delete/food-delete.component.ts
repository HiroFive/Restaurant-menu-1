import { Component } from '@angular/core';
import { BaseFood } from 'src/app/common/classes';
import { FoodService, ModalService } from 'src/app/services';

@Component({
  selector: 'app-food-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class FoodDeleteComponent {
  deleteFoodId!: string;
  message: string =
    ' Do you really want to delete this Dish? This process cannot be undone';
  constructor(
    private foodService: FoodService,
    private modalService: ModalService,
    private InjFood: BaseFood,
  ) {
    this.deleteFoodId = this.InjFood.id;
  }

  public closeModal(): void {
    this.modalService.changeOpenState(false);
  }
  public delete(): void {
    this.foodService.deleteFoodById(this.deleteFoodId);
  }
}
