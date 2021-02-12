import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TncModalPage } from './tnc-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TncModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TncModalPageRoutingModule {}
