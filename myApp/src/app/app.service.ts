import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
class ItemCart {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, image: string, name: string, price: number) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.price = price;
    this.quantity = 1;
  }
}

@Injectable()
export class appService {

  listCart: Array<ItemCart>;
  total: number;
 
  constructor(private http: Http) {
    this.listCart = [];
    this.total = 0;
  }

  getAll() {
    return this.http.get("../assets/product.json").map(res => res.json());
  }

  addCart = (product: any) => {
    for(let item of this.listCart) {
      if (product.id == item.id) {
        item.quantity += 1;
        return this.listCart;
      }
    }
    let itemCart = new ItemCart(product.id, product.image, product.name, product.price);
    this.listCart.push(itemCart);
  }

  getCart() {
    return this.listCart;
  }

  getTotal() {
    this.total = 0;
    for(let item of this.listCart) {
      this.total += item.quantity;
    }
    return this.total;
  }
}
