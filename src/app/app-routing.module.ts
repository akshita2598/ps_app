import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : '' , loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)},
  {path : 'banner' , loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)},
  { path: 'items', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) },
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
  { path: 'timer', loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule) },
  { path: 'timerbyService', loadChildren: () => import('./timerby-service/timerby-service.module').then(m => m.TimerbyServiceModule) },
  { path: 'dynamicdiv', loadChildren: () => import('./dynamicdiv/dynamicdiv.module').then(m => m.DynamicdivModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
