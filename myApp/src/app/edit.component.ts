import {Component, OnInit } from '@angular/core';
import { appService } from './app.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, FormControl, FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'edit',
  templateUrl: 'edit.component.html'
})
export class EditComponent { 
  articleForm: any;
  id: number;
  private sub: any;
  articleInfo: any
  imgSrc: any;

  constructor(private route: ActivatedRoute, private _appService: appService, private  formBuilder: FormBuilder ) {
    this.articleInfo = {};
    this.articleForm = this.formBuilder.group({
      image: new FormControl(''),
      title: new FormControl(''),
      content: new FormControl(''),
      author: new FormControl('')
    });
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this._appService.getAll().subscribe((data: any) => {
      for(let articles of data.article) {
        if(articles.id == this.id) {
          this.articleInfo = articles;
        }
      }
      this.articleForm.controls.title.setValue(this.articleInfo.title);
      this.articleForm.controls.content.setValue(this.articleInfo.content);
      this.articleForm.controls.author.setValue(this.articleInfo.author);
      this.imgSrc = this.articleInfo.image;
      
    });
  }
}  