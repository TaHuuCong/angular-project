import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class ComponentTwoComponent implements OnInit {

  todayDate;
  componentproperty;

  constructor(
    private myService: MyServiceService,
  ) { }

  ngOnInit() {
    this.todayDate = this.myService.showTodayDate();
    console.log(this.myService.serviceproperty);
    this.myService.serviceproperty = "component created"; // value is changed.

    // component-two đã làm thay đổi giá trị của this.myService.serviceproperty
    // khiến cho giá trị của componentproperty thay đổi ở cả component-three
    this.componentproperty = this.myService.serviceproperty;
  }

}
