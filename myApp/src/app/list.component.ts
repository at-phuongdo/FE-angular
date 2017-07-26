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


	// @Input() listMember:string[];	
	deleteMember = (indexMember: number) :void => {
		this.listMember.splice(indexMember , 1);
	}

	listMember: string[] = [];
}
