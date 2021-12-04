import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlarmnummerPage } from './alarmnummer.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmnummerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlarmnummerPageRoutingModule {}
