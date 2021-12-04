import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfspraakmakenPageRoutingModule } from './afspraakmaken-routing.module';

import { AfspraakmakenPage } from './afspraakmaken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfspraakmakenPageRoutingModule
  ],
  declarations: [AfspraakmakenPage]
})
export class AfspraakmakenPageModule {}
