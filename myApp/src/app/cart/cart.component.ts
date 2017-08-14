import { Component, OnInit, Input, Output } from '@angular/core';
import { appService } from '../app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  total: number;
  listCart: Array<any>;
  constructor(private _appService: appService) {
    this.listCart = [];
    this.total = 0;
  }

  ngOnInit() {
    this.listCart = this._appService.getCart();
    for(let item of this.listCart){
      this.total += item.price*item.quantity;
    }
  }
}
