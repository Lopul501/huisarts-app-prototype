import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepaginaPageRoutingModule } from './homepagina-routing.module';

import { HomepaginaPage } from './homepagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepaginaPageRoutingModule
  ],
  declarations: [HomepaginaPage]
})
export class HomepaginaPageModule {}
