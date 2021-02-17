import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LockpatternModalPageRoutingModule } from './lockpattern-modal-routing.module';

import { LockpatternModalPage } from './lockpattern-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LockpatternModalPageRoutingModule
  ],
  declarations: [LockpatternModalPage]
})
export class LockpatternModalPageModule {}
