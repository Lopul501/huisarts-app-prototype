import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BloedonderzoekPage } from './bloedonderzoek.page';

const routes: Routes = [
  {
    path: '',
    component: BloedonderzoekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BloedonderzoekPageRoutingModule {}
