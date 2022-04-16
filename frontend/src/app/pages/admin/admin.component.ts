import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services';
@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  modalState!: { conten: any; open: boolean, injector: any};

  constructor(private modalService: ModalService) {
  }
  ngOnInit(): void {
    this.modalService.modalSource.subscribe(
      (value: any) => (this.modalState = value),
    );
  }
}
