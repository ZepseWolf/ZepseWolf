import { AfterViewInit, Component,HostListener ,OnInit, QueryList, ViewChildren} from '@angular/core';
import { Router, NavigationStart, NavigationEnd,NavigationCancel} from '@angular/router';
import { Subscription } from 'rxjs';

import { LifeCycleService } from './services/life-cycle.service';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  img_number:number=0;

  @HostListener('click', ['$event'])onClick(data:any) {
    if (data.srcElement.className != 'login_logo') {//To link to child 
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i:number;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  stateReady:boolean = false;
  // subscription: Subscription;
  constructor(
    private _router: Router,
    private _lifeCycleService: LifeCycleService,
    private _animationService: AnimationService
  ) {
    //init once changed page
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationStart) {
        if(event.id !== 1){
          this._animationService.closeCurtain();
        }
        this._lifeCycleService.checkLoadedPages(event.url);
      }
      // if(event instanceof NavigationEnd) {
      //   console.log("The event is : " ,event);
      // }

      // if(event instanceof NavigationCancel){
      // }
    });
  }
  
  ngOnInit(): void{
    console.log("Start program at ",performance.now());
  };
}
