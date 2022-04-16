import { Component, OnInit } from '@angular/core';
import { IInfo } from 'src/app/common/interfaces';
import { InfoService } from 'src/app/services';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  info!: IInfo;
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.infoCurrentContent.subscribe(
      (value) => (this.info = value),
    );
  }
}
