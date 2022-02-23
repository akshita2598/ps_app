import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { DisplaytimerComponent } from './displaytimer/displaytimer.component';
import { InputtimerComponent } from './inputtimer/inputtimer.component';
import { LogtimestampComponent } from './logtimestamp/logtimestamp.component';
import { LogbuttonclickComponent } from './logbuttonclick/logbuttonclick.component';


@NgModule({
  declarations: [
    TimerComponent,
    DisplaytimerComponent,
    InputtimerComponent,
    LogtimestampComponent,
    LogbuttonclickComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    FormsModule
  ]
})
export class TimerModule { }
