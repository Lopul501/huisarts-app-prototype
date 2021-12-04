import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountmakenPageRoutingModule } from './accountmaken-routing.module';

import { AccountmakenPage } from './accountmaken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountmakenPageRoutingModule
  ],
  declarations: [AccountmakenPage]
})
export class AccountmakenPageModule {}
