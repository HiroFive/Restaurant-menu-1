import { Component, Injector, Input, OnInit } from '@angular/core';
import { BaseFood, Food } from 'src/app/common/classes';
import { IFood } from 'src/app/common/interfaces';
import { ModalService } from 'src/app/services';
import { FoodDeleteComponent } from '../common/forms/delete/';
import { EditFoodComponent } from '../common/forms/food-crud/edit-food/edit-food.component';
@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss'],
})
export class FoodCardComponent implements OnInit {
  @Input()
  food!: IFood;
  @Input() role?: string;
  isAdmin!: boolean;
  massage?: string;

  allPrices: string = '';
  allWeights: string = '';
  constructor(private inj: Injector, private modalService: ModalService) {}

  ngOnInit(): void {
    this.getInitPortion();
    this.isAdmin = this.role === 'admin';
  }

  getInitPortion(): void {
    const initPortion: { initPrice: number[]; initWeights: number[] } = {
      initPrice: [],
      initWeights: [],
    };
    for (let portion of this.food.portions) {
      initPortion.initPrice.push(portion.price);
      initPortion.initWeights.push(portion.weight);
    }
    this.allPrices = initPortion.initPrice.join('/');
    this.allWeights = initPortion.initWeights.join('/');
  }

  public editFood = (): void => {
    const injector: Injector = Injector.create({
      providers: [
        {
          provide: BaseFood,
          useValue: new Food(
            this.food.id,
            this.food.name,
            this.food.description,
            this.food.hidden,
            this.food.categoryId,
            this.food.image,
            this.food.portions,
          ),
        },
      ],
      parent: this.inj,
    });
    this.modalService.openNewModal(EditFoodComponent, 'Edit Dish', injector);
  };

  public deleteFood = (): void => {
    const injector: Injector = Injector.create({
      providers: [
        {
          provide: BaseFood,
          useValue: new Food(this.food.id),
        },
      ],
      parent: this.inj,
    });
    this.modalService.openNewModal(
      FoodDeleteComponent,
      'Delete Dish',
      injector,
    );
  };
}
