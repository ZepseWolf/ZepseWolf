import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartcityComponent } from './smartcity.component';

const routes: Routes = [
  {
    path: "",
    component: SmartcityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartcityRoutingModule { }
