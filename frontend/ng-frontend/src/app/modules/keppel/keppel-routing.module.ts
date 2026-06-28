import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeppelComponent } from './keppel.component';

const routes: Routes = [
  {
    path: '',
    component: KeppelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeppelRoutingModule { }
