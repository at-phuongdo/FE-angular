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

  // title = 'app';
  // trainers :any;
  // trainerInfo :any;
  i: number;
  // constructor() {
    //   this.trainers = [
    //     { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
    //       name: "Vi", 
    //       birthday: "1-1-1990", 
    //       team: "FE"},
    //     { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
    //       name: "Kien", 
    //       birthday: "1-1-1992", 
    //       team: "Ruby"},
    //     { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
    //       name: "A", 
    //       team: "Ruby"},
    //   ];
    //   // this.trainerInfo = {};
    // }


    trainers: string = ""; 
    constructor(private _appService: appService) { } 
    
    // show(trainer: any) {
    //   this.trainerInfo = null;
    //   setTimeout(()=> {
    //     this.trainerInfo = trainer;
    //   });
    // }
    show = (i) => {
      this.i = i;
      console.log(i);
     // console.log(this._appService.trainers[i]);
    }
  }
