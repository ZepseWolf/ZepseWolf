import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { NaivebayesComponent } from './naivebayes.component';

const routes: Routes = [
  {
    path: "",
    component: NaivebayesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NaivebayesRoutingModule { }
