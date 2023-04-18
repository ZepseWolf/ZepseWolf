import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { DigimonComponent } from './digimon.component';

// Directive
import { CustomDirectiveModule } from 'src/app/directives/custom-directive.module';
import { DigimonRouting } from './digimon-routing.module';

@NgModule({
  declarations: [
    DigimonComponent,
  ],
  imports: [
    CommonModule,
    DigimonRouting,
    CustomDirectiveModule
  ],
  providers:[],
  exports:[]
})
export class DigimonModule { }
