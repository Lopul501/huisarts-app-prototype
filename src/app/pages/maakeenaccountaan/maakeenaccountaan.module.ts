import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaakeenaccountaanPageRoutingModule } from './maakeenaccountaan-routing.module';

import { MaakeenaccountaanPage } from './maakeenaccountaan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaakeenaccountaanPageRoutingModule
  ],
  declarations: [MaakeenaccountaanPage]
})
export class MaakeenaccountaanPageModule {}
