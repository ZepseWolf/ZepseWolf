import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';

import { AirstrikeComponent } from './airstrike.component';
import { AirstrikeRoutingModule } from './airstrike-routing.module';

@NgModule({
  declarations: [
    AirstrikeComponent,
  ],
  imports: [
    CommonModule,
    AirstrikeRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class AirstrikeModule { }
