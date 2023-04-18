import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPopoutComponent } from './error-popout.component';

@NgModule({
  declarations: [
    ErrorPopoutComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ErrorPopoutComponent
  ]
})
export class PopoutModule { }
