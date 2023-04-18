import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';

import { ScopewebComponent } from './scopeweb.component';
import { ScopewebRoutingModule } from './scopeweb-routing.module';

@NgModule({
  declarations: [
    ScopewebComponent,
  ],
  imports: [
    CommonModule,
    ScopewebRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class ScopewebModule { }
