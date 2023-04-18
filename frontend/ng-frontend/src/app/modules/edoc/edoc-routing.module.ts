import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { EdocComponent } from './edoc.component';

const routes: Routes = [
  {
    path: "",
    component: EdocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EdocRoutingModule { }
