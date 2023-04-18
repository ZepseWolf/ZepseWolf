import { NgModule } from '@angular/core';

// Directives
import { ImagesDisplayDirective } from './images-display.directive';
import { SvgDisplayDirective } from './svg-display.directive'; 

@NgModule({
  declarations: [
    SvgDisplayDirective,
    ImagesDisplayDirective
  ],
  exports:[
    SvgDisplayDirective,
    ImagesDisplayDirective
  ]
})
export class CustomDirectiveModule { }
