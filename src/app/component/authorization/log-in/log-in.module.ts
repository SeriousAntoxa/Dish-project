import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { AuthorizationService } from '../../services/authorization/authorization.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService
  ]
})
export class LogInModule { }
