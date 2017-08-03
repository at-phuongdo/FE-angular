import { Component, Input, OnChanges} from '@angular/core';
import { appService } from '../service/app.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})

export class DetailComponent {
  @Input() id: number;
  trainerInfo: any;
  constructor(private _appService: appService) { }

  ngOnChanges() {
    this.trainerInfo = null;
    setTimeout(() => {
      this._appService.getDetail().subscribe((data: any) => {
         for(let trainerInfo of data.trainer) {
          if(trainerInfo.id == this.id) {
            this.trainerInfo = trainerInfo;
           }
         }
       });
    });
    
  }
}
