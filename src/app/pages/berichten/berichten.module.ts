import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerichtenPageRoutingModule } from './berichten-routing.module';

import { BerichtenPage } from './berichten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerichtenPageRoutingModule
  ],
  declarations: [BerichtenPage]
})
export class BerichtenPageModule {}
