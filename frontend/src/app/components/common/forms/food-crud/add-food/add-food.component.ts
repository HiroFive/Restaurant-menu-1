import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseCategory } from 'src/app/common/classes';
import { FoodService } from 'src/app/services';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['../food.component.scss'],
})
export class AddFoodComponent implements OnInit {
  foodFormGroup: FormGroup;
  submitted: boolean = false;
  files: File[] = [];
  parentId: string;
  requestErrorMessage!: { massage: string };
  descriptionTextLength: number = 0;
  subscription: any;

  constructor(
    private InjParentCategory: BaseCategory,
    private foodService: FoodService,
  ) {
    this.parentId = this.InjParentCategory.id;
    this.foodFormGroup = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(60),
      ]),
      hidden: new FormControl(false),
      categoryId: new FormControl(this.parentId, [Validators.required]),
      portions: new FormArray([
        new FormGroup({
          price: new FormControl(1, [
            Validators.required,
            Validators.pattern(/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/),
          ]),
          weight: new FormControl(1, [
            Validators.required,
            Validators.pattern(/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/),
          ]),
        }),
      ]),
    });
  }

  get portions() {
    return this.foodFormGroup.controls['portions'] as FormArray;
  }

  get name() {
    return this.foodFormGroup.get('name');
  }

  get description() {
    return this.foodFormGroup.get('description');
  }

  ngOnInit(): void {
    this.subscription = this.foodService.currentErrorMessage.subscribe((massage) => {
      this.requestErrorMessage = massage;
    });
    this.foodFormGroup.get('description')?.valueChanges.subscribe((text) => {
      this.descriptionTextLength = text.length;
      return text;
    });
    this.foodService.setErrorMessage('');
  }

  public addPortion(): void {
    const position = new FormGroup({
      price: new FormControl(1, [
        Validators.required,
        Validators.pattern(/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/),
      ]),
      weight: new FormControl(1, [
        Validators.required,
        Validators.pattern(/^([0-9]+([.][0-9]*)?|[.][0-9]+)$/),
      ]),
    });
    this.portions.push(position);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  public onSelect(event: any) {
    this.files.shift();
    this.files.push(...event.addedFiles);
  }

  public onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  public deletePortion(portionIndex: number): void {
    this.portions.removeAt(portionIndex);
  }
  public submittedFalse(): void {
    this.submitted = false;
  }

  public submit = (): void => {
    this.submitted = true;
    const formData = new FormData();
    formData.append('image', this.files[0]);
    formData.append('data', JSON.stringify(this.foodFormGroup.value));
    this.foodService.createFood(formData, this.submittedFalse);
  };
}
