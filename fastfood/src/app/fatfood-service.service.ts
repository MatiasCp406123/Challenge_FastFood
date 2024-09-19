import { Injectable } from '@angular/core';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class FatfoodServiceService {
  constructor(){}
  orders:Orders[]=[]
  orderCoocked:Orders[]=[]
  entrega:Orders[]=[]
  add(order:Orders){
    this.orders.push(order);
  }
  getAll():Orders[]{
    return[
      ...this.orders
    ];
  }
  remove(orderNumber: number) {
    this.orders = this.orders.filter(order => order.number !== orderNumber);
    this.getAll();  
  }
  addCoocked(order:Orders){
    this.orderCoocked.push(order)
  }
  getCoocked():Orders[]{
    return[
    ...this.orderCoocked
    ]
  }
  removeCoocked(orderNumber: number) {
    this.orderCoocked = this.orderCoocked.filter(order => order.number !== orderNumber);
    this.getCoocked() 
  }
  addEntrega(order:Orders){
    this.entrega.push(order)
  }
  removeEntrega(orderNumber: number) {
    this.entrega = this.entrega.filter(order => order.number !== orderNumber);
    this.getEntregas();  
  }
  getEntregas():Orders[]{
    return[
    ...this.entrega
    ]
  }
}
