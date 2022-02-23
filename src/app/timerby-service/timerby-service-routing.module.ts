import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerbyServiceComponent } from './timerby-service.component';

const routes: Routes = [{ path: '', component: TimerbyServiceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerbyServiceRoutingModule { }
