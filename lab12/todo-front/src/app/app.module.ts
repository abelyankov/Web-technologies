import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TaskListSevice } from './task-list.service';
import { TaskListDetailComponent } from './task-list-detail/task-list-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TaskListDetailComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ TaskListSevice ],
  bootstrap: [AppComponent]
})
export class AppModule { }