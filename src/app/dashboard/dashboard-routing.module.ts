import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OverviewComponent } from './overview/overview.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { OtaComponent } from './ota/ota.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'overview', component: OverviewComponent },
    { path: 'certificates', component: CertificatesComponent },
    { path: 'ota', component: OtaComponent },
    { path: '', redirectTo: 'overview', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
