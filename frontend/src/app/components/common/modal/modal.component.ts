import { Component, OnInit } from '@angular/core';
import { IModal } from 'src/app/common/interfaces';
import { ModalService } from 'src/app/services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  modalState!: IModal;
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalCurrentContent.subscribe(
      (value) => (this.modalState = value),
    );
  }

  public closeModal(): void {
    this.modalService.changeOpenState(false);
  }
}
