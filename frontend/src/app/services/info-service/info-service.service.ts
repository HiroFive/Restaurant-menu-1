import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInfo, IInfoPatch } from 'src/app/common/interfaces';
import { Api } from 'src/app/helpers/constants';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ModalService } from '..';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  infoSource = new BehaviorSubject({
    id: '',
    address: '',
    contacts: '',
    wifiPassword: '',
  });
  infoErrorMessage = new BehaviorSubject({
    massage: '',
  });

  currentErrorMessage = this.infoErrorMessage.asObservable();
  infoCurrentContent = this.infoSource.asObservable();

  constructor(private http: HttpClient, private modalService: ModalService) {
    this.getRestaurantInfo().subscribe((info) => this.infoSource.next(info));
  }

  public setErrorMessage(newMessage: string): void {
    this.infoErrorMessage.next({
      massage: newMessage,
    });
  }

  public getRestaurantInfo(): Observable<IInfo> {
    return this.http.get<IInfo>(Api.info);
  }

  public setRestaurantInfo(info: IInfoPatch, callback?: () => void): void {
    this.http
      .patch<IInfo[]>(Api.info, info)
      .pipe(
        finalize(() => {
          callback!();
        }),
      )
      .subscribe(
        (newInfo) => {
          this.infoSource.next(newInfo[0]);
          this.modalService.changeOpenState(false);
        },
        (err) => {
          this.setErrorMessage(err.error.message);
        },
      );
  }
}
