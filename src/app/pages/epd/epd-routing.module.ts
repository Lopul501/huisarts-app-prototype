import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpdPage } from './epd.page';

const routes: Routes = [
  {
    path: '',
    component: EpdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpdPageRoutingModule {}
