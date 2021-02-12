import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'submitted',
    loadChildren: () => import('./pages/submitted/submitted.module').then( m => m.SubmittedPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signature-modal',
    loadChildren: () => import('./pages/signature-modal/signature-modal.module').then( m => m.SignatureModalPageModule)
  },
  {
    path: 'submitted-details',
    loadChildren: () => import('./pages/submitted-details/submitted-details.module').then( m => m.SubmittedDetailsPageModule)
  },
  {
    path: 'tnc-modal',
    loadChildren: () => import('./pages/tnc-modal/tnc-modal.module').then( m => m.TncModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
