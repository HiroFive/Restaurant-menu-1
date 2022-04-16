import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomRouterService, FoodService } from 'src/app/services';
import { searchSelectCategory } from 'src/app/helpers/constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() role!: 'admin' | 'user';

  searchGroup: FormGroup;
  searchCategories: Array<string> = searchSelectCategory;
  timeoutPromise!: ReturnType<typeof setTimeout>;
  constructor(
    private foodService: FoodService,
    private customRouterService: CustomRouterService,
  ) {
    this.searchGroup = new FormGroup({
      searchInput: new FormControl(''),
      searchBy: new FormControl(this.searchCategories[0]),
    });
  }

  get searchInputValue() {
    return this.searchGroup.value.searchInput;
  }

  get searchByValue(): string {
    return this.searchGroup.value.searchBy;
  }

  ngOnInit(): void {
    this.searchGroup.get('searchInput')?.valueChanges.subscribe((text) => {
      clearTimeout(this.timeoutPromise);
      this.timeoutPromise = setTimeout(() => {
        this.submit();
      }, 800);
      return text;
    });
  }

  public checkSearchByControl(): string {
    switch (this.searchByValue) {
      case 'food description':
        return 'food.description';
      case 'category name':
        return 'title';
      default:
        return 'food.name';
    }
  }

  public submit(): void {
    this.customRouterService.filterParamsByCategory(this.role === 'admin');
    let subParam = this.checkSearchByControl();
    if (this.searchInputValue !== '') {
      this.foodService.setRequestParams(
        `${this.foodService.getParams}&$childrenCategory.${subParam}$=${this.searchInputValue}`,
      );
    }

    this.foodService.getFoodList();
  }
}
