import { Component, OnInit, Input } from '@angular/core';
import {
  SidebarService,
  CategoryService,
  ModalService,
  InfoService,
} from '../../../services';
import { ICategory, ICategoryWithChildren } from 'src/app/common/interfaces';
import {
  categoryAll,
  categoryFoodWithoutCategory,
} from 'src/app/helpers/constants';
import { AddCategoryComponent } from '../../common/forms';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() isAdmin!: boolean;
  @Input() wifiPassword!: string;
  hideSideNav: { visible: boolean } = { visible: false };
  categories: ICategory[] = [];
  categoryAll: ICategoryWithChildren = categoryAll;
  categoryFoodWithoutCategory: ICategoryWithChildren =
    categoryFoodWithoutCategory;

  constructor(
    private sidebarService: SidebarService,
    private categoryService: CategoryService,
    private modalService: ModalService,
    private infoService: InfoService,
  ) {}

  ngOnInit(): void {
    this.categoryService.categoryForMenuContent.subscribe((response) => {
      this.categories = response;
    });
    this.infoService.infoCurrentContent.subscribe(
      (response) => (this.wifiPassword = response.wifiPassword),
    );

    this.sidebarService.currentSidebar.subscribe(
      (value) => (this.hideSideNav = value),
    );
    this.categoryService.getCategoryForSidebar(this.isAdmin);
  }

  public openAddCategoryModal(): void {
    this.modalService.openNewModal(AddCategoryComponent, 'Add new category');
    this.closeSidebar();
  }
  public closeSidebar(): void {
    this.sidebarService.changeSidebarState(false);
  }
}
