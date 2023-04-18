import { Directive, HostListener } from '@angular/core';

import { LifeCycleService } from '../services/life-cycle.service';
@Directive({
  selector: 'img',
})
export class ImagesDisplayDirective {
  
  @HostListener('load')
  @HostListener('error')
  imageLoaded() {
    this._lifeCycle.updateCompletedNormalLoad();
  }

  constructor(
    private _lifeCycle: LifeCycleService
    ) {
      this._lifeCycle.addImageCount();
    }

}
