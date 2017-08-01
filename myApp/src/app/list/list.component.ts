import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import { appService } from '../service/app.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})

export class ListComponent {
  i :number;
  trainers :any;
  // constructor() {
    // this.trainers = [
    //   { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
    //     name: "Vi", 
    //     birthday: "1-1-1990", 
    //     team: "FE"},
    //   { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
    //     name: "Kien", 
    //     birthday: "1-1-1992", 
    //     team: "Ruby"},
    //   { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
    //     name: "A", 
    //     team: "Ruby"},
    // ];
    // this.trainerInfo = {};
  // }  

  constructor(private _appService: appService) { }

  ngOnInit(): void { 
      this.trainers = this._appService.trainers; 

    }
   @Output() myEvent: EventEmitter<number> = new EventEmitter<number>();

    show(i: number){
      console.log(i);
      this.myEvent.emit(i);
      // this.i=null;
  }
}
