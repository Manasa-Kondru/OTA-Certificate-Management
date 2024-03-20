import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { OtaComponent } from './ota/ota.component';
import { OverviewComponent } from './overview/overview.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LayoutComponent,
    CertificatesComponent,
    OtaComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
