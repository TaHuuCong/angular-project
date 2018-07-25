import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentOneComponent implements OnInit {

  isLargerThanFive = 10;
  soThuNhat = 5;

  constructor() { }

  ngOnInit() {
  }

}
