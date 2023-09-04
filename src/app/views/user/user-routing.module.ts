import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  },
  {
    path:'edit',
    component:EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
