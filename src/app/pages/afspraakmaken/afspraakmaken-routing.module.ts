import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AfspraakmakenPage } from './afspraakmaken.page';

const routes: Routes = [
  {
    path: '',
    component: AfspraakmakenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AfspraakmakenPageRoutingModule {}
