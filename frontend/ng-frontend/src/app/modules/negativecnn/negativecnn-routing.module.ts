import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NegativecnnComponent } from './negativecnn.component';

const routes: Routes = [
  {
    path: "",
    component: NegativecnnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NegativecnnRoutingModule { }
