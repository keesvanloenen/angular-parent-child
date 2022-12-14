// 5c. parent → child ng-content select @ContentChild() AfterContentInit()

import { Component } from '@angular/core';
import { Child5cComponent } from './child.component';

@Component({
  selector: 'parent5c',
  standalone: true,
  imports: [Child5cComponent],
  template: `
    <section>
      <child5c>
        <h3 class="city" #the_city>Urk</h3>   <!-- 👈 TRV added -->
        <p class="name">Joop</p>
      </child5c>
    </section>
  `,
  styles: [`
    p {
      display: inline-block;
      color: black;
      width: 50px;
      border: 2px dashed black;
    }
  `]
})
export class Parent5cComponent { }
