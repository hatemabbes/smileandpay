import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from "./guards/auth-guard.service";

const routes: Routes = [
  {
    path: 'transactions',
    loadChildren: () => import('./public/transactions/transactions.module').then( m => m.HomePageModule),
    canActivate: [AuthService]
  },
  {
    path: '',
    redirectTo: 'bienvenue',
    pathMatch: 'full'
  },
  {
    path: 'recapitulatif',
    loadChildren: () => import('./public/recapitulatif/recapitulatif.module').then( m => m.RecapitulatifPageModule),
    canActivate: [AuthService]
  },
  {
    path: 'login',
    loadChildren: () => import('./public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bienvenue',
    loadChildren: () => import('./public/bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
