import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { VtepComponent } from './vtep.component';
import { VtepRoutingModule } from './vtep-routing.module';

@NgModule({
  declarations: [
    VtepComponent,
  ],
  imports: [
    CommonModule,
    VtepRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class VtepModule { }
