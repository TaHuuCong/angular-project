import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MyServiceService } from '../service/my-service.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComponentThreeComponent implements OnInit {

  todayDate;
  componentproperty;

  constructor(
    private myService: MyServiceService,
  ) { }

  ngOnInit() {
    this.todayDate = this.myService.showTodayDate();
    this.componentproperty = this.myService.serviceproperty;
  }

}
