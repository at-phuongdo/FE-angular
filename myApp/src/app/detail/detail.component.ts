import { Component, Input, OnChanges} from '@angular/core';
import { appService } from '../service/app.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})

export class DetailComponent {
  @Input() i: number;
  trainerInfo: any;
  constructor(private _appService: appService) { }

  ngOnChanges() {
    this.trainerInfo = this._appService.getDetail(this.i);
  }
}
