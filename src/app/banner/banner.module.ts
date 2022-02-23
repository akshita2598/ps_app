import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerRoutingModule } from './banner-routing.module';
import { BannerRotatingComponent } from './banner-rotating/banner-rotating.component';


@NgModule({
  declarations: [
    BannerRotatingComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule
  ]
})
export class BannerModule { }
