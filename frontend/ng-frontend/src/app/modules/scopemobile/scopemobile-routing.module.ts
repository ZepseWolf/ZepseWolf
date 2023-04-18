import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScopemobileComponent } from './scopemobile.component';

const routes: Routes = [
  {
    path: "",
    component: ScopemobileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScopemobileRoutingModule { }
