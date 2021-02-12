import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TncModalPageRoutingModule } from './tnc-modal-routing.module';

import { TncModalPage } from './tnc-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TncModalPageRoutingModule
  ],
  declarations: [TncModalPage]
})
export class TncModalPageModule {}
