import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountmakenPage } from './accountmaken.page';

const routes: Routes = [
  {
    path: '',
    component: AccountmakenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountmakenPageRoutingModule {}
