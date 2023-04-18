import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentPopoutComponent } from './payment-popout.component';

@NgModule({
  declarations: [
    PaymentPopoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaymentPopoutComponent,
  ]
})
export class PaymentPopoutModule { }
