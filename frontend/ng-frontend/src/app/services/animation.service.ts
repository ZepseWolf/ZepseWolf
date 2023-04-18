import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  
  // ----------------------------------------------
  // Please lable your animation for which part
  // @name.global/local 
  // If local please state which module(s) is used.
  // ----------------------------------------------

  constructor() { }

  // @Loader.global
  public closeCurtain():void{
    document.getElementById('left-curtain')!.style.animation = "";
    document.getElementById('right-curtain')!.style.animation = "";
    document.getElementById('loader_fill')!.style.animation = "";
  }

  // @Loader.global
  public openCurtain():void{
    document.getElementById('left-curtain')!.style.animation = "curtain-move-left 500ms ease forwards 500ms,background_fill 200ms ease forwards";
    document.getElementById('right-curtain')!.style.animation = "curtain-move-right 500ms ease forwards 500ms";
    document.getElementById('loader_fill')!.style.animation = "border_fill 200ms ease forwards";
  }
  // @Brand.local - home module : To remove
  public startBrand():void{

  }
}
