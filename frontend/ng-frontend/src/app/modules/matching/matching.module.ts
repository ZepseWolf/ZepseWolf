import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { MatchingComponent } from './matching.component';
import { MatchingRoutingModule } from './matching-routing.module';

@NgModule({
  declarations: [
    MatchingComponent,
  ],
  imports: [
    CommonModule,
    MatchingRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class MatchingModule { }
