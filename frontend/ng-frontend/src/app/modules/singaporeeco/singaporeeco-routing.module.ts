import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingaporeecoComponent } from './singaporeeco.component';

const routes: Routes = [
  {
    path: "",
    component: SingaporeecoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SingaporeecoRoutingModule { }
