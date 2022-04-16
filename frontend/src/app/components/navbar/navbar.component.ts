import { Component, OnInit, Injector } from '@angular/core';
import {
  CustomRouterService,
  InfoService,
  ModalService,
  SidebarService,
} from '../../services';
import { Router, Event, NavigationEnd } from '@angular/router';
import { EditInfoComponent } from 'src/app/components/common/forms';
import { BaseInfo, Info } from 'src/app/common/classes';
import { ICustomRouter, IInfo } from 'src/app/common/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  hideSideNav: { visible: boolean } = { visible: false };
  info!: IInfo;
  routerState!: ICustomRouter;
  isAdmin: boolean = false;
  loading: boolean = true;

  constructor(
    private router: Router,
    private customRouterService: CustomRouterService,
    private sidebarService: SidebarService,
    private modalService: ModalService,
    private infoService: InfoService,
    private inj: Injector,
  ) {}

  ngOnInit(): void {
    this.infoService.infoCurrentContent.subscribe(
      (value) => (this.info = value),
    );
    this.customRouterService.currentRouteState.subscribe((value) => {
      this.isAdmin = value.currentUrl.split('?')[0] === '/admin';
      this.routerState = value;
    });
    this.sidebarService.currentSidebar.subscribe(
      (value) => (this.hideSideNav = value),
    );
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.customRouterService.setCurrentUrl(event.url);
        this.customRouterService.setRootUrl();
        this.loading = false;
      }
    });
  }
  toggleSideNav() {
    this.sidebarService.changeSidebarState(!this.hideSideNav.visible);
  }

  openEditInfoModal() {
    const injector: Injector = Injector.create({
      providers: [
        {
          provide: BaseInfo,
          useValue: new Info(
            this.info.address,
            this.info.contacts,
            this.info.wifiPassword,
          ),
        },
      ],
      parent: this.inj,
    });
    this.modalService.openNewModal(
      EditInfoComponent,
      'Edit restaurant info',
      injector,
    );
  }
}
