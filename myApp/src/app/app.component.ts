import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { ListComponent } from './list.component';
import { FormComponent } from './form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // listMember: Array<string> =[];
  //   getName = (e) :void => {
  //     this.listMember.push(e);
  //     console.log(this.listMember);
  // }

 @ViewChild(ListComponent) listComp: any;
 @ViewChild(FormComponent) formComp: any;
  members: any;

  constructor() {
  	this.members = [];
  }

  ngOnInit(){
  	this.formComp.getName = () => {
  		this.pushNewMember();
  	}
  }

  ngAfterContentInit(){

  }

  pushNewMember() {
  	this.listComp.listMember.push(this.formComp.member);
  	console.log(this.listComp.listMember);
  }
}
