import { Component, inject, Input, OnInit } from '@angular/core';
import { POSComponent } from '../pos/pos.component';
import { DeliveryPointComponent } from '../delivery-point/delivery-point.component';
import { Orders } from '../orders';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitchenComponent } from "../kitchen/kitchen.component";
import { FatfoodServiceService } from '../fatfood-service.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [POSComponent, DeliveryPointComponent, CommonModule,
    FormsModule, KitchenComponent],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css'
})
export class RestaurantComponent implements OnInit{
   orders:Orders[]=[]
   private orderService=inject(FatfoodServiceService)
   ngOnInit():void{
    this.agregar()
   }
  agregar(){
    this.orders=this.orderService.getAll()
  }
  
  
}
