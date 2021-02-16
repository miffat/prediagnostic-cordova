import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmittedPageRoutingModule } from './submitted-routing.module';

import { SubmittedPage } from './submitted.page';
import { SortPipe } from '../../pages/sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmittedPageRoutingModule
  ],
  declarations: [SubmittedPage, SortPipe]
})
export class SubmittedPageModule {}
