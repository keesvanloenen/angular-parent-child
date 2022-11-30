// 5a. parent → child ng-content

import { Component } from '@angular/core';
import { Child5aComponent } from './child.component';

@Component({
  selector: 'parent5a',
  standalone: true,
  imports: [Child5aComponent],
  template: `
    <section>
      <child5a><h3>Urk</h3></child5a>
    </section>
  `,
  styles: ['']
})
export class Parent5aComponent { }
