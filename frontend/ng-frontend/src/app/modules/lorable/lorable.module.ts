import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { LorableComponent } from './lorable.component';
import { LorableRoutingModule } from './lorable-routing.module';

@NgModule({
  declarations: [
    LorableComponent,
  ],
  imports: [
    CommonModule,
    LorableRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class LorableModule { }
