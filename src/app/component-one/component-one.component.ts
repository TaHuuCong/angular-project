import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ComponentFourComponent } from '../component-four/component-four.component';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ComponentOneComponent implements OnInit, AfterViewInit {

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

  @ViewChild('nameEx') nameIn: ElementRef;
  @ViewChild(ComponentFourComponent) viewChild: ComponentFourComponent;

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

  ngAfterViewInit() {
    this.nameIn.nativeElement.value = "Anchovy!";
  }

  drink() {
    this.viewChild.eat('water');
  }

}
