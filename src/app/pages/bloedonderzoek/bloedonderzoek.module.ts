import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BloedonderzoekPageRoutingModule } from './bloedonderzoek-routing.module';

import { BloedonderzoekPage } from './bloedonderzoek.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BloedonderzoekPageRoutingModule
  ],
  declarations: [BloedonderzoekPage]
})
export class BloedonderzoekPageModule {}
