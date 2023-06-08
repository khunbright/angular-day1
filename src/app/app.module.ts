import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainComponent } from './main/main.component';
import { Sub1Component } from './main/sub1/sub1.component';
import { Sub2Component } from './main/sub2/sub2.component';
import { Sub3Component } from './main/sub3/sub3.component';
import { Submini1Component } from './main/sub3/submini1/submini1.component';
import { Submini2Component } from './main/sub3/submini2/submini2.component';
import { Workshop2Component } from './workshop2/workshop2.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Sub1Workshop2Component } from './workshop2/sub1-workshop2/sub1-workshop2.component';
import { Sub2Workshop2Component } from './workshop2/sub2-workshop2/sub2-workshop2.component';
import { Workshop3Component } from './workshop3/workshop3.component';
import { Workshop5Component } from './workshop5/workshop5.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    MainComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    Submini1Component,
    Submini2Component,
    Workshop2Component,
    Sub1Workshop2Component,
    Sub2Workshop2Component,
    Workshop3Component,
    Workshop5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
