import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxFlowModule, FlowInjectionToken } from '@flowjs/ngx-flow';
import Flow from '@flowjs/flow.js';
import { SharedModuleComponent } from './shared-module.component';
import { FileUploadComponent} from './components/fileupload/file-upload.component';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatChipsModule
} from '@angular/material';

@NgModule({
  declarations: [
    SharedModuleComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxFlowModule,
    MatToolbarModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatCheckboxModule,
  MatSelectModule,
  MatFormFieldModule,
  MatIconModule,
  MatMenuModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,
  MatChipsModule
  ],
  exports: [SharedModuleComponent,FileUploadComponent],
  providers:[
    {
      provide: FlowInjectionToken,
      useValue: Flow
    }
  ]
})
export class SharedModule { }
