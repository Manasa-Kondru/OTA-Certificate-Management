import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { OtpVerifyComponent } from './otp-verify/otp-verify.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'otp', component: OtpVerifyComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
