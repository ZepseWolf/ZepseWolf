import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components

import { LorableComponent } from './lorable.component';

const routes: Routes = [
  {
    path: "",
    component: LorableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LorableRoutingModule { }
