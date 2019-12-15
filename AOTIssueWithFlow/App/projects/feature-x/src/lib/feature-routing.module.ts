import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureXComponent } from './feature-x.component';
import { uploadComponent} from './components/Upload/upload.component';

export const featureRoutes: Routes = [
  {
    path: '',
    component: FeatureXComponent,
    children: [
      {
        path: '',
        redirectTo: 'upload',
        pathMatch: 'full'
      },
      {
        path: 'upload',
        component: uploadComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(featureRoutes)],
  exports: [RouterModule]
})
export class FeatureXRoutingModule { }

