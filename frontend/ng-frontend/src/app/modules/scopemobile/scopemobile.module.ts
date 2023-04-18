import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { ScopemobileComponent } from './scopemobile.component';
import { ScopemobileRoutingModule } from './scopemobile-routing.module';

@NgModule({
  declarations: [
    ScopemobileComponent,
  ],
  imports: [
    CommonModule,
    ScopemobileRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class ScopemobileModule { }
