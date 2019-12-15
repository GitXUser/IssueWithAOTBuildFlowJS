import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from './services/route-guard.service';
import { CustomPreloadingStrategy } from './services/custom-preloadingstrategy.service';

export const appRoutes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: '../home/home.module#HomeModule'
  // },
  {
    path: 'featurex',
    loadChildren: './module-wrappers/feature-xwrapper.module#FeatureXWrapperModule',
    canLoad: [RouteGuardService]
  },
  {
    path: 'home',
    loadChildren: './module-wrappers/feature-xwrapper.module#FeatureXWrapperModule',
    canLoad: [RouteGuardService]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false, preloadingStrategy: CustomPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
