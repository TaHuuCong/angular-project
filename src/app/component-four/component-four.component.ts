import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.scss']
})
export class ComponentFourComponent implements OnInit {

  // Truyền giá trị từ component cha vào cho biến isLargerThanFive, soThuNhat
  @Input() isLargerThanFive: number;
  @Input('st1') soThuNhat: number;

  // Truyền giá trị từ component cha vào cho biến chuoiThuNhat
  chuoiThuNhat: string;
  get chuoiMot() {
    return this.chuoiThuNhat;
  }

  @Input('chuoi-mot')
  set chuoiMot(value: string) {
    this.chuoiThuNhat = value.trim();
  }

  @Output() enterAnything = new EventEmitter<string>();
  @Output() isShow = new EventEmitter<boolean>();
  value: string;
  checked: boolean = false;
  foods = [];

  constructor() { }

  ngOnInit() {
    // thông báo lỗi khi truyền vào 1 chuỗi rỗng
    if (!this.chuoiThuNhat) {
      throw new Error('chuoiThuNhat is required!');
    }
  }

  emitEnterAnything() {
    this.enterAnything.emit(this.value);
    this.value = '';
  }

  // checked là thuộc tính của input nên nó mới có giá trị trong $event.target.checked
  emitIsShow(event) {
    this.isShow.emit(event.target.checked);
    // console.log(event.target.checked);
  }

  // khi component cha sử dụng template variable (#) thì có thể sử dụng các public properties/ methods của component con
  eat(food: string) {
    this.foods.push(food);
  }

}
