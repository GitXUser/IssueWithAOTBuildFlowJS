import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-SharedModule',
  template: `
    <p>
      shared-module works!
    </p>
  `,
  styles: []
})
export class SharedModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
