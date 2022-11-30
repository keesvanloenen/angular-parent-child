// 0. no communication

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'parent0',
  template: `
    <section>
      <child0></child0>
      <p>Hello</p>
    </section>
  `,
  styles: ['']
})
export class Parent0Component {

}
