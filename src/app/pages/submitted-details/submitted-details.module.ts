import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmittedDetailsPageRoutingModule } from './submitted-details-routing.module';

import { SubmittedDetailsPage } from './submitted-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmittedDetailsPageRoutingModule
  ],
  declarations: [SubmittedDetailsPage]
})
export class SubmittedDetailsPageModule {}
