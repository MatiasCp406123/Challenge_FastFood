import { DatePipe } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Orders } from '../orders';
import { FatfoodServiceService } from '../fatfood-service.service';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule, DatePipe],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {
  order:Orders={
    number:Math.floor(Math.random()*1000)+1,
    name:'',
    description:'',
    date:new Date()
  };
  @Output() onSave = new EventEmitter<Orders>();
  private fastfood=inject(FatfoodServiceService)
 save(form:NgForm){
  if (form.invalid) {
    alert("Formulario invalido");
    console.log(form)
    return;
 }
 this.order.number=this.order.number+1;
 const orderCopy={
  ...this.order
 }
 console.log(form.value)
 this.fastfood.add(orderCopy)
 this.onSave.emit(this.order);
 form.resetForm()
 
}
}