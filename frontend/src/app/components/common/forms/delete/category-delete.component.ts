import { Component } from '@angular/core';
import { BaseCategory } from 'src/app/common/classes';
import { CategoryService, ModalService } from 'src/app/services';

@Component({
  selector: 'app-category-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class CategoryDeleteComponent {
  deleteCategoryId!: string;
  message: string =
    'Do you really want to delete this category? This process cannot be undone';
  constructor(
    private categoryService: CategoryService,
    private modalService: ModalService,
    private InjCategory: BaseCategory,
  ) {
    this.deleteCategoryId = this.InjCategory.id;
  }

  public closeModal(): void {
    this.modalService.changeOpenState(false);
  }
  public delete(): void {
    this.categoryService.deleteCategory(this.deleteCategoryId);
  }
}
