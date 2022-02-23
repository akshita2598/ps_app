import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TimerseriveService {

  timer = new Subject<string>()
  timestampValue = new Subject<{}>(); 
  startTimerValue = new Subject<boolean>();
  startCountValue = new Subject<number>()
  pauseCountValue = new Subject<number>();


  constructor() { }


}
