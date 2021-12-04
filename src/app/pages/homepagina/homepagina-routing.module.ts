import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepaginaPage } from './homepagina.page';

const routes: Routes = [
  {
    path: '',
    component: HomepaginaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepaginaPageRoutingModule {}
