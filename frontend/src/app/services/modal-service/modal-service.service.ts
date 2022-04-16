import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modalSource = new BehaviorSubject({
    title: 'None',
    open: false,
    content: null,
    injector: Injector,
  });
  modalCurrentContent = this.modalSource.asObservable();

  public changeModalContent(newContent: any) {
    this.modalSource.next({ ...this.modalSource.value, content: newContent });
  }
  public changeOpenState(newState: boolean) {
    this.modalSource.next({ ...this.modalSource.value, open: newState });
  }
  public changeInjector(newInjector: any) {
    this.modalSource.next({
      ...this.modalSource.value,
      injector: newInjector,
    });
  }
  public openNewModal(
    newContent: any,
    newTitle: string = 'None',
    newInjector: any = null,
  ) {
    this.modalSource.next({
      title: newTitle,
      open: true,
      content: newContent,
      injector: newInjector,
    });
  }
}
