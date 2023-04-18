import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { SnapnypRoutingModule } from './snapnyp-routing.module';
import { SnapnypComponent } from './snapnyp.component';

@NgModule({
  declarations: [
    SnapnypComponent,
  ],
  imports: [
    CommonModule,
    SnapnypRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class SnapnypModule { }
