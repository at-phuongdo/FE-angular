import { Component, Input, Output } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {
	// constructor(){}
	// listName=["ggg"];
	// loadData(member: string) {
	// 	this.listName.push(member);

	// }
	@Input() listMember:string[];	
	deleteMember = (member :string) :void => {
		this.listMember.splice(this.listMember.indexOf(member) , 1);
	}
}


