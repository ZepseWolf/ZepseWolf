import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Route
import { HomeRouting } from './home-routing.module';

// Component
import { HomeComponent } from './home.component';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRouting,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class HomeModule { }
