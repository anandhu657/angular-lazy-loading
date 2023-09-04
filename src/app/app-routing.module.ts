import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './shared/components/layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UnauthGuard } from './shared/guards/unauth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    canActivateChild:[UnauthGuard],
    children: [
      {
        path: 'blogs',
        loadChildren: () => import('./views/posts/posts.module').then(m => m.PostsModule)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
