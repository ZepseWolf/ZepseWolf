import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DigimonComponent } from './digimon.component';

const routes: Routes = [
  {
    path: "",
    component: DigimonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DigimonRouting { }
