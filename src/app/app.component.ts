import { Component, HostListener } from '@angular/core';
import { History, Time } from 'src/types/data-types';
// import Cube from 'cube-simulator';

// const cube = new Cube();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  constructor() {}

  title: string = 'rubic-simulator';
  scramble: string = '-';

  time: Time = {
    timems: 0,
    timer: null,
    running: false,
  };

  histories: History[] = [];

  @HostListener('document:keyup', ['$event'])
  handleKeyUpEvent(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
        if (this.time.running) {
          this.time.timems = 0;
          const startTime = Date.now() - (this.time.timems || 0);
          this.time.timer = setInterval(() => {
            this.time.timems = Date.now() - startTime;
          });
        } else {
          if (this.time.timer) {
            clearInterval(this.time.timer);
            this.histories.push({
              time: this.time.timems,
              scramble: this.scramble,
            });
          }
        }
        this.time.running = !this.time.running;
        break;
      default:
        console.log(event.key);
        break;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDownEvent(event: KeyboardEvent) {
    switch (event.key) {
      case ' ':
        break;
      default:
        break;
    }
  }
}
