import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  sidebarSource = new BehaviorSubject({ visible: false });
  currentSidebar = this.sidebarSource.asObservable();

  constructor() {}

  public changeSidebarState(newValue: boolean) {
    this.sidebarSource.next({ visible: newValue });
  }
}
