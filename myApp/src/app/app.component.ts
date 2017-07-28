import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  trainers :any;
  trainerInfo :any;
  constructor(){
    this.trainers = [
    { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
      name: "Vi", 
      birthday: "1-1-1990", 
      team: "FE"},
    { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
      name: "Kien", 
      birthday: "1-1-1992", 
      team: "Ruby"},
    { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
      name: "A", 
      team: "Ruby"},
    ];
    // this.trainerInfo = {};
  }


  show(trainer: any) {
    this.trainerInfo = null;
    setTimeout(()=>{
      this.trainerInfo = trainer;
    });
  }
}

