import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignatureModalPageRoutingModule } from './signature-modal-routing.module';

import { SignatureModalPage } from './signature-modal.page';
import { SignaturePadModule } from 'angular2-signaturepad';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignatureModalPageRoutingModule,
    SignaturePadModule
  ],
  declarations: [SignatureModalPage]
})
export class SignatureModalPageModule {}
