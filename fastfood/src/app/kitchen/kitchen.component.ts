import { Component, inject, OnInit } from '@angular/core';
import { FatfoodServiceService } from '../fatfood-service.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent implements OnInit{
  
   orderService=inject(FatfoodServiceService)
  orders:Orders[]=[];
  cockOrders:Orders[]=[];
  ngOnInit() {
    this.orders=this.orderService.getAll();
    this.cockOrders=this.orderService.getCoocked();
  }
  coockOrder(ordernumber:Orders){
    this.orderService.remove(ordernumber.number);
    this.orderService.addCoocked(ordernumber)
  }
  coockFinal(ordernumber:Orders){
    this.orderService.removeCoocked(ordernumber.number)
    this.orderService.addEntrega(ordernumber);
  }
}
