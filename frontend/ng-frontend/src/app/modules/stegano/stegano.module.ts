import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SteganoComponent } from './stegano.component';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { SteganoRoutingModule } from './stegano-routing.module';

@NgModule({
  declarations: [
    SteganoComponent,
  ],
  imports: [
    CommonModule,
    SteganoRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class SteganoModule { }
