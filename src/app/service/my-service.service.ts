import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  serviceproperty = "Service Created";

  constructor() { }

  showTodayDate() {
    const todayDate = new Date();
    return todayDate;
  }

}
