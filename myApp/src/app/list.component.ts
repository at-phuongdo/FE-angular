import {Component} from '@angular/core';
import { appService } from './app.service';

@Component({
  selector: 'list',
  templateUrl: 'list.component.html'
})
export class ListComponent { 
  articles: Array<any>;
  constructor(private _appService: appService) {
    this._appService.getAll().subscribe((data: any) => {
      this.articles = data.article || [];
    });
  }
}