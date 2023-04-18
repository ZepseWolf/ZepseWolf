import { Component, OnInit , ChangeDetectorRef, HostListener } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute, Router , Params } from '@angular/router';

import { Subscription, fromEvent  } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  sideNavOpened: boolean = false;
  intervId:any; 
  timeset:any;
  loginIcon :string = "assets/img/loginIcon.png";

  constructor(private _httpService : HttpService,private router: Router) { }
  

  ngOnInit() {
    var self = this;

    // this._httpService.checkIsLogin().subscribe(data =>{
    //   if(data.status === true){
    //     // THIS IS:/ If user is logged in (checked via cookies), change this.loginIcon
    //   }else{
    //     // Failed login 
    //     this.loginIcon ="assets/img/loginIcon.png";
    //   }
    // }
    // ,(e)=>{
    //   this.loginIcon ="assets/img/loginIcon.png";
    // });

    // this.initTopNavListener();
  }


  openSideNav():void{
    if(this.sideNavOpened){
      this.closeSideNav();
    }else{
      this.sideNavOpened = true;
      document.getElementById("mySidenav")!.style.width = "100%";
    }
  }

  closeSideNav():void{
    this.sideNavOpened = false; 
    document.getElementById("mySidenav")!.style.width = "0";
  }

  openTopNav():void{
  }

  clearSessions(){
    this._httpService.logout();
  }

  private initTopNavListener(){
    window.addEventListener("mousedown", ($event)=>{
      var html  = $event.target as HTMLElement;
      if(html.className !== "icon" && html.className !== "profile-pic" && document.getElementById("myDropdown")){
        document.getElementById("myDropdown")!.classList.remove("show");
      }
    });
  }

  private updateProfilePic(data:any): void{
    this.loginIcon = data.url;
    // this.isLoggedIn = data.isStored;
  }
  
}
