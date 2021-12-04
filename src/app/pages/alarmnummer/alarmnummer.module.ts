import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlarmnummerPageRoutingModule } from './alarmnummer-routing.module';

import { AlarmnummerPage } from './alarmnummer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlarmnummerPageRoutingModule
  ],
  declarations: [AlarmnummerPage]
})
export class AlarmnummerPageModule {}
