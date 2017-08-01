import { Injectable } from '@angular/core';

@Injectable()
export class appService {

  trainers :any;
  
  constructor() {
    this.trainers = [
      { 
        name: "Vi", 
        birthday: "1-1-1990", 
        team: "FE"},
      { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-27.jpg",
        name: "Kien", 
        birthday: "1-1-1992", 
        team: "Ruby"},
      { avatar: "http://pro654.wap.sh/hinh-nen/ke-cap-mat-trang/minion-28.jpg",
        name: "A", 
        team: "Ruby"},
    ];
    // this.trainerInfo = {};
   
  }

  getDetail(i: number){
    return this.trainers[i];
  }
} 