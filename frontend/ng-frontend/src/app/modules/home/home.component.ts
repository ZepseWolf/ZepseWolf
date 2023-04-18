import { Component, ElementRef, OnInit, ViewChild ,AfterViewInit } from '@angular/core';

// Services
import { LifeCycleService } from 'src/app/services/life-cycle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,AfterViewInit {
  @ViewChild('svgTablet') svgTablet!: ElementRef;
  @ViewChild('svgSnake') svgSnake!: ElementRef;

  constructor(
    private _lifeCycleService: LifeCycleService
  ){ }


  ngAfterViewInit(): void {
    this._lifeCycleService.initCheck();
  }

  ngOnInit(): void {
    var self = this;
    self._lifeCycleService.completedLifeCycle.subscribe((cb)=>{
      // if(cb){
      
      // }
    });
  }

  public startNow(): void{
    console.log("starting now")
  }

  private doAnimation(): void{
    // THIS IS:// For moving image
    var notebook = document.getElementById("brand-notebook");
    var items = document.getElementById("brand-camera");

    // THIS IS:// For animated logo
    var brand = document.getElementById('brandname');
    var paths= brand!.children as HTMLCollectionOf<HTMLElement>; 
    notebook!.style.animation = ' notebook 1s ease forwards';
    items!.style.animation = ' items 1s ease forwards';
    brand!.style.animation = ' brand-fill 1s ease forwards 3.5s';
    for (var i = 0; i < paths.length; i++) {
      paths[i].style.animation = `brand-animation 2s ease forwards ${Math.round(0.6+(i*0.3)*10)/10}s`;  
    }
  };
}
