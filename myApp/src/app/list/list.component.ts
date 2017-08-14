import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { appService } from '../app.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  product: any;
  products: Array<any>;

  constructor(private _appService: appService) {
    this._appService.getAll().subscribe((data: any) => {
      this.products = data.product || [];
    });
  }

  ngOnInit(){}

  addCart = (product: any) => {
    this._appService.addCart(product);
  }
}
