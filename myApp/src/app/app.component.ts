import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	listMember: Array<string> =[];
  	getName = (event) :void => {
  		this.listMember.push(event);
  		console.log(this.listMember);
  }
}
