import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MatchingComponent } from './matching.component';

const routes: Routes = [
  {
    path: "",
    component: MatchingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchingRoutingModule { }
