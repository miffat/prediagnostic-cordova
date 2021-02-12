import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmittedDetailsPage } from './submitted-details.page';

const routes: Routes = [
  {
    path: '',
    component: SubmittedDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmittedDetailsPageRoutingModule {}
