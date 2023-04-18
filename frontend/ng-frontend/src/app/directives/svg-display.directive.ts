import { Directive, HostListener } from '@angular/core';

import { LifeCycleService } from '../services/life-cycle.service';
@Directive({
  selector: '[appCheckSvg]'
})
export class SvgDisplayDirective {
  
  @HostListener('load')
  @HostListener('error')
  svgLoaded() {
    this._lifeCycle.updateCompletedSvgLoad();
  }

  constructor(
    private _lifeCycle:LifeCycleService 
  ) { 
    if(!this._lifeCycle.isLoadedPages()){
      this._lifeCycle.addSvgCount();
    }

  }

}
