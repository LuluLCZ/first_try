import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapseModule } from 'angular-bootstrap-md';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CollapseModule,
    BsDropdownModule,
    CollapseModule
  ]
})
export class HeaderModule { }
