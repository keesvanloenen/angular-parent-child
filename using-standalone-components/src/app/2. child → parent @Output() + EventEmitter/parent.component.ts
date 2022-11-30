// 2. child → parent @Output() + EventEmitter

import { Component } from '@angular/core';
import { Child2Component } from './child.component';

@Component({
  selector: 'parent2',
  standalone: true,
  imports: [Child2Component],
  template: `
    <section>
      <child2 (messageEvent)="onMessageEvent($event)"></child2>
      <br>{{ my_message }}
    </section>
  `,
  styles: ['']
})
export class Parent2Component {
  my_message!: string;
  
  onMessageEvent(msg: string) {
    this.my_message = msg;
  }
}
