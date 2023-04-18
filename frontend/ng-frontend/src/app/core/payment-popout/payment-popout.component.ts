import { Component, OnInit } from '@angular/core';
import { UiComponentMemoryService } from 'src/app/services/ui-component-memory.service';

@Component({
  selector: 'app-payment-popout',
  templateUrl: './payment-popout.component.html',
  styleUrls: ['./payment-popout.component.scss']
})
export class PaymentPopoutComponent implements OnInit {

  constructor(private _uiComponentMemoryService: UiComponentMemoryService ) { }

  initWallet: boolean= false;
  initTopUp:boolean = false;
  

  ngOnInit(): void {  
  }

  public close():void{
    this._uiComponentMemoryService.initPaymentPopout();
  }

  public review(ws:boolean):void{
    // event.path[1]
    if(ws){
      document.getElementById("walletTitle")!.style.animation = "changeSize 2s forwards, moveTop 2s forwards";
      document.getElementById("walletIcon")!.style.animation = "changeSizeIcon 2s forwards";
    }else{
      document.getElementById("topUpTitle")!.style.animation = "changeSize 2s forwards, moveTop 2s forwards";
      document.getElementById("topUpIcon")!.style.animation = "changeSizeIcon 2s forwards";
    }
    setTimeout(()=>{
      if(ws){
        document.getElementById("walletTitle")!.style.animation = "changeSize 2s forwards, moveTop 2s forwards";
        document.getElementById("walletIcon")!.style.animation = "changeSizeIcon 2s forwards";
        this.initWallet = true;
      }else{
        document.getElementById("topUpTitle")!.style.animation = "changeSize 2s forwards, moveTop 2s forwards";
        document.getElementById("topUpIcon")!.style.animation = "changeSizeIcon 2s forwards";
        this.initTopUp = true;
      }
    },2000)
    
    
    // event.path[1].style.animation="changeSize 2s forwards, moveTop 2s forwards";
    // event.path[1].children[1].style.animation="changeSizeIcon 2s forwards";
    // event.path[1].children[1].style.height="40px";
    // event.path[1].children[1].style.width="40px";
    // event.srcElement.children[0].style.animation="changeSize 2s forwards, moveTop 2s forwards";
    // event.srcElement.children[1].style.animation="changeSize 2s forwards, moveTop 2s forwards";
    console.log();
  }

  public submitForm():void{
  }
}
