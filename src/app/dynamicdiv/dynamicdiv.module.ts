import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DynamicdivRoutingModule } from './dynamicdiv-routing.module';
import { DynamicdivComponent } from './dynamicdiv.component';


@NgModule({
  declarations: [
    DynamicdivComponent
  ],
  imports: [
    CommonModule,
    DynamicdivRoutingModule,
    MatSnackBarModule
  ]
})
export class DynamicdivModule { }
