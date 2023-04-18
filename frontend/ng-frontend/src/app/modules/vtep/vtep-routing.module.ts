import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VtepComponent } from './vtep.component';

const routes: Routes = [
  {
    path: "",
    component: VtepComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VtepRoutingModule { }
