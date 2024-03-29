import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  declarations: [
    LoginPageComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    PrimengModule
  ]
})
export class AuthModule { }
