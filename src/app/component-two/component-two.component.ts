import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ComponentTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
