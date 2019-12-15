import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'shared-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatModules } from './app-common.module';

import { ToastrModule } from 'ngx-toastr';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxFlowModule, FlowInjectionToken } from '@flowjs/ngx-flow';
import Flow from '@flowjs/flow.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatModules,
    ToastrModule.forRoot(),
    MatPasswordStrengthModule,
    FilterPipeModule,
    NgxFlowModule
  ],
  providers: [{
    provide: FlowInjectionToken,
    useValue: Flow
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
