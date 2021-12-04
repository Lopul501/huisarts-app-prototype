import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaakeenaccountaanPage } from './maakeenaccountaan.page';

const routes: Routes = [
  {
    path: '',
    component: MaakeenaccountaanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaakeenaccountaanPageRoutingModule {}
