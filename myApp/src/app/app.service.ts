import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class appService {
  // articles: Array<string> = [];
  constructor(private http: Http) {}
  getAll() {
    return this.http.get("../assets/article.json").map(res => res.json());
  }
}