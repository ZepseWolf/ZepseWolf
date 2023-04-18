import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';

import { EdocComponent } from './edoc.component';
import { EdocRoutingModule } from './edoc-routing.module';

@NgModule({
  declarations: [
    EdocComponent,
  ],
  imports: [
    CommonModule,
    EdocRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class EdocModule { }
