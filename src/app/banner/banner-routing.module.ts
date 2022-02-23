import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerRotatingComponent } from './banner-rotating/banner-rotating.component';

const routes: Routes = [
  {
    path: '',
    component: BannerRotatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannerRoutingModule { }
