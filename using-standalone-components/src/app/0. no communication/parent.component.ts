// 0. no communication

import { Component } from '@angular/core';
import { Child0Component } from './child.component';

@Component({
  selector: 'parent0',
  standalone: true,
  imports: [Child0Component],
  template: `
    <section>
      <child0></child0>
      <p>Hello</p>
    </section>
  `,
  styles: ['']
})
export class Parent0Component { }
