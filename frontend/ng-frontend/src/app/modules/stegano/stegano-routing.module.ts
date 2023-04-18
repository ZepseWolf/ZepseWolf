import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SteganoComponent } from './stegano.component';

const routes: Routes = [
  {
    path: "",
    component: SteganoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SteganoRoutingModule { }
