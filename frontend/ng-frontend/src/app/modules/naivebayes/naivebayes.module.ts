import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaivebayesComponent } from './naivebayes.component';



// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { NaivebayesRoutingModule } from './naivebayes-routing.module';

@NgModule({
  declarations: [
    NaivebayesComponent,
  ],
  imports: [
    CommonModule,
    NaivebayesRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class NaivebayesModule { }
