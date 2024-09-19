import { Component, inject, OnInit } from '@angular/core';
import { FatfoodServiceService } from '../fatfood-service.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent implements OnInit {
  entrega:Orders[]=[]
  ngOnInit(): void {
   this.entrega=this.orderService.getEntregas()
  }
  orderService=inject(FatfoodServiceService)
  entregaFinal(ordernumber:Orders){
    this.orderService.removeEntrega(ordernumber.number)
    
  }
}
