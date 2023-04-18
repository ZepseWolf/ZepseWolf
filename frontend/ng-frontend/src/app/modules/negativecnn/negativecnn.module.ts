import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NegativecnnComponent } from './negativecnn.component';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { NegativecnnRoutingModule } from './negativecnn-routing.module';

@NgModule({
  declarations: [
    NegativecnnComponent,
  ],
  imports: [
    CommonModule,
    NegativecnnRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class NegativecnnModule { }
