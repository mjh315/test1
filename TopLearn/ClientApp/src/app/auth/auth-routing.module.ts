import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      { path: '', redirectTo: '/Login', pathMatch: 'full' }, // redirect to `first-component`
      {
        path: 'Login',
        component: LoginComponent,
      },
      {
        path: 'Register',
        component: RegisterComponent,
      },
      { path: '**', redirectTo: '/Login', pathMatch: 'full' }, // redirect to `first-component`
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
