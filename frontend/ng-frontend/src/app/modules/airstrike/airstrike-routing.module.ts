import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AirstrikeComponent } from './airstrike.component';

const routes: Routes = [
  {
    path: "",
    component: AirstrikeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AirstrikeRoutingModule { }
