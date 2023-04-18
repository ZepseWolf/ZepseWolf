import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiComponentMemoryService {

  constructor() { }

  private paymentPopout = new BehaviorSubject<Boolean>(false);
  public isPaymentPopout = this.paymentPopout.asObservable();  

  private defaultMessage = new BehaviorSubject<string>("");
  public message = this.defaultMessage.asObservable();
  
  public setMessage(s:string):void {
    this.defaultMessage.next(s);
    // To get message just sub to public message
  }

  public initPaymentPopout(){
    this.paymentPopout.next(true);
  }
}
