import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class appService {
  trainers: Array<string> = [];
  constructor(private http: Http) {}
  getAll() {
    return this.http.get("../assets/trainer.json").map(res => res.json());
  }
  getDetail(){
    return this.http.get("../assets/trainer.json").map(res => res.json());
  }
}
