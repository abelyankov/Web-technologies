import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../itask-list';
import { TaskListSevice } from '../task-list.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-task-list',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public taskLists: ITaskList[] =[];

  constructor(
    private provider: TaskListSevice,
    private location: Location
  ) { }

  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res;
    })
  }
}