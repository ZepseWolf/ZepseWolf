import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { KeppelRoutingModule } from './keppel-routing.module';
import { KeppelComponent } from './keppel.component';

@NgModule({
  declarations: [
    KeppelComponent
  ],
  imports: [
    CommonModule,
    KeppelRoutingModule,
    CustomDirectiveModule
  ],
  providers: [],
  exports: []
})
export class KeppelModule { }
