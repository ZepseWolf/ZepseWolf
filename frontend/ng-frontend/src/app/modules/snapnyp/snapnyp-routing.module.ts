import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SnapnypComponent } from './snapnyp.component';

const routes: Routes = [
  {
    path: "",
    component: SnapnypComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SnapnypRoutingModule { }
