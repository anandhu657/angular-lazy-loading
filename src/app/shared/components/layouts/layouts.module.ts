import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';



@NgModule({
  declarations: [
    AuthLayoutComponent,
    UserLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
