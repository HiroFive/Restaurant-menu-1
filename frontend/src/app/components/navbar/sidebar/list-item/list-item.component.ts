import { Component, OnInit, Input } from '@angular/core';
import { ICategory } from 'src/app/common/interfaces';
import { CustomRouterService, SidebarService } from 'src/app/services';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() category!: ICategory;
  @Input() type!: 'unique' | 'root' | 'unCategory';
  @Input() isAdmin!: boolean;

  showButtons!: boolean;

  constructor(
    private sidebarService: SidebarService,
    private customRouterService: CustomRouterService,
  ) {}

  ngOnInit(): void {
    this.showButtons = this.isAdmin && this.type === 'unique';
  }

  public changeCategory(): void {
    if (this.type === 'unique' || this.type === 'unCategory') {
      this.customRouterService.navigateWithQueryParams({
        category: this.category.id,
      });
    } else {
      this.customRouterService.navigateToRoot();
    }
    this.sidebarService.changeSidebarState(false);
  }
}
