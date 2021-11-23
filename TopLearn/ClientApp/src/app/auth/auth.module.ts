import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { NbButtonModule, NbCheckboxModule, NbCardModule, NbFormFieldModule, NbIconModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    NbInputModule, 
    AuthRoutingModule,
    NbFormFieldModule,
    NbIconModule,
    NbButtonModule,
    NbEvaIconsModule,
    NbCardModule,
    FormsModule,
    NbCheckboxModule
  ]
})
export class AuthModule { }
