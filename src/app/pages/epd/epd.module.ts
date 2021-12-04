import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EpdPageRoutingModule } from './epd-routing.module';

import { EpdPage } from './epd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EpdPageRoutingModule
  ],
  declarations: [EpdPage]
})
export class EpdPageModule {}
