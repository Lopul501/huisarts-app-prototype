import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerichtenPage } from './berichten.page';

const routes: Routes = [
  {
    path: '',
    component: BerichtenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerichtenPageRoutingModule {}
