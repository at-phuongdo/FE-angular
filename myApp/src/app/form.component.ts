import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListComponent } from './list.component';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
 	member: string;
// 	constructor() {}
// 	@Output() myEvent: EventEmitter<string> = new EventEmitter<string>();

// 	getName(){
// 		this.myEvent.emit(this.member);
// 		this.member="";
// 	}
}
