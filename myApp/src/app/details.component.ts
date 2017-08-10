import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { appService } from './app.service';


@Component({
  selector: 'detail',
  templateUrl: 'details.component.html'
})
export class DetailsComponent { 

  id: number;
  private sub: any;
  articleInfo: any;

  constructor(private route: ActivatedRoute, private _appService: appService ) {
    this.articleInfo = {};
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this._appService.getAll().subscribe((data: any) => {
      for(let articles of data.article) {
        if(articles.id == this.id) {
          this.articleInfo = articles;
          console.log(this.articleInfo);
        }
      }
    });
  }
}  