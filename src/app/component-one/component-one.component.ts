import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentOneComponent implements OnInit {

  isLargerThanFive: number = 10;
  soThuNhat: number = 5;
  chuoiThuNhat: string = "  Hello world!  ";
  textFromInput: string = '';
  checked: boolean;
  authorName: string = "THC";
  contacts = [
    {
      id: 1,
      name: 'Tiep Phan',
      job: 'Web Developer'
    },
    {
      id: 2,
      name: 'John Doe',
      job: 'Writer'
    },
    {
      id: 3,
      name: 'Michael Bay',
      job: 'Producer, Director'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  getTextFromInput(value) {
    this.textFromInput = value.trim();
  }

  getStatusOfCheck(value) {
    this.checked = value;
    // console.log(this.checked);
  }

}
