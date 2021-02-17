import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LockpatternModalPage } from './lockpattern-modal.page';

const routes: Routes = [
  {
    path: '',
    component: LockpatternModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LockpatternModalPageRoutingModule {}
