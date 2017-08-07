import { Component } from '@angular/core';
import { appService } from './service/app.service';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [appService]
})
export class AppComponent {

  id: number;

    trainers: string = ""; 
    constructor(private _appService: appService) { } 

    show = (id) => {
      this.id = id;
      console.log(id);
     // console.log(this._appService.trainers[i]);
    }
  }
