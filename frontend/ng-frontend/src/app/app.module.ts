import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Core 
import { NavComponent } from './core/nav/nav.component';
import {RouterModule} from '@angular/router';

// Forms
// import { ReactiveFormsModule } from '@angular/forms';

// Directive
import { CustomDirectiveModule } from './directives/custom-directive.module';
import { PaymentPopoutComponent } from './core/payment-popout/payment-popout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ReactiveFormsModule,
    CustomDirectiveModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
