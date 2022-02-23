import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerbyServiceRoutingModule } from './timerby-service-routing.module';
import { TimerbyServiceComponent } from './timerby-service.component';
import { DisplayTimerValueComponent } from './display-timer-value/display-timer-value.component';
import { InputTimerValueComponent } from './input-timer-value/input-timer-value.component';
import { LoguttonclickComponent } from './loguttonclick/loguttonclick.component';
import { LogtimeStampComponent } from './logtime-stamp/logtime-stamp.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TimerbyServiceComponent,
    DisplayTimerValueComponent,
    InputTimerValueComponent,
    LoguttonclickComponent,
    LogtimeStampComponent
  ],
  imports: [
    CommonModule,
    TimerbyServiceRoutingModule,
    FormsModule
  ]
})
export class TimerbyServiceModule { }
