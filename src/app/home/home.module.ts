import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    CollapseModule.forRoot(),
    BsDropdownModule,
  ]
})
export class HomeModule { }
