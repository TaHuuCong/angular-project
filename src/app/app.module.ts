import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { ComponentFourComponent } from './component-four/component-four.component';

import { MyServiceService } from './service/my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent, ComponentOneComponent]   // nơi app bắt đầu --> 2 component này cùng cấp
})
export class AppModule { }
