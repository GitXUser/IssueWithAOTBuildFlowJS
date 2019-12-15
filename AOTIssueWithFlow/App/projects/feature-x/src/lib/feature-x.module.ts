import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureXComponent } from './feature-x.component';
import { SharedModule } from 'shared-module';
import { FormsModule } from '@angular/forms';
import { uploadComponent } from './components/Upload/upload.component';
import { FeatureXRoutingModule } from './feature-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FeatureXComponent, uploadComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    FeatureXRoutingModule
  ],
  exports: [FeatureXComponent, uploadComponent]
})
export class FeatureXModule { }
