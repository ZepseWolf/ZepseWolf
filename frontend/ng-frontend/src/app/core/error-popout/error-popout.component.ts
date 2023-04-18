import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UiComponentMemoryService } from 'src/app/services/ui-component-memory.service';

@Component({
  selector: 'app-error-popout',
  templateUrl: './error-popout.component.html',
  styleUrls: ['./error-popout.component.scss']
})
export class ErrorPopoutComponent implements OnInit,AfterContentInit {

  @ViewChild("popout")popout!: ElementRef;
  public message:string ="";
  private lock:boolean = false;

  constructor(private _uiComponentMemoryService : UiComponentMemoryService ) { }
  
  ngAfterContentInit(): void {
    this._uiComponentMemoryService.message.subscribe((data)=>{
      if(data){
        this.message = data;
        this.display();
      }
    })
  }

  ngOnInit(): void {
  }

  private display():void {
    if(!this.lock){
      this.popout.nativeElement.style.animation = "fadeIn 1s forwards";
      setTimeout(()=>{
        this.popout.nativeElement.style.animation = "fadeOut 1s";
        this.lock = false;
      },3000)
    }
  }
}
