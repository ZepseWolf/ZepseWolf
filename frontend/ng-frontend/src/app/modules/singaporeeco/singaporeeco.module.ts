import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingaporeecoComponent } from './singaporeeco.component';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { SingaporeecoRoutingModule } from './singaporeeco-routing.module';

@NgModule({
  declarations: [
    SingaporeecoComponent,
  ],
  imports: [
    CommonModule,
    SingaporeecoRoutingModule,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class SingaporeecoModule { }
