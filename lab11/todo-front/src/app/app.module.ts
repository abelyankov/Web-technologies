import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TaskListService } from './task-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [TaskListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
