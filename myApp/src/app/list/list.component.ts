import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import { appService } from '../service/app.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  id :number;
  trainers :any;

  constructor(private _appService: appService) {
    this._appService.getAll().subscribe((data: any) => {
      this.trainers = data.trainer || [];
    });
  }

  ngOnInit(): void { 
    // this.trainers = this._appService.trainers; 
  }

  @Output() myEvent: EventEmitter<number> = new EventEmitter<number>();

  show(id: number){
    console.log(id);
    this.myEvent.emit(id);
  }
}
