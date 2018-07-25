import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.scss']
})
export class ComponentFourComponent implements OnInit {

  @Input() isLargerThanFive;
  @Input('st1') soThuNhat;

  constructor() { }

  ngOnInit() {
  }

}
