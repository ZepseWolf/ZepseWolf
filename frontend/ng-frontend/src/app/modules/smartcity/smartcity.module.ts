import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { SmartcityComponent } from './smartcity.component';
import { SmartcityRoutingModule } from './smartcity-routing.module';

@NgModule({
  declarations: [
    SmartcityComponent,
  ],
  imports: [
    CommonModule,
    SmartcityRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class SmartcityModule { }
