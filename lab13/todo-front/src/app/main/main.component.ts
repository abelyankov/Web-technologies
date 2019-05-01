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

  public taskLists: ITaskList[] = [];
  public name: any = '';

  constructor(
    private provider: TaskListSevice,
    private location: Location
  ) { }

  ngOnInit() {
    this.provider.getTaskLists().then(res => {
      this.taskLists = res;
    });
  }

  updateTaskList(taskList: ITaskList) {
    this.provider.updateTaskList(taskList).then(res => {
      console.log(taskList.name + ' updated');
    });
  }

  deleteTaskList(taskList: ITaskList) {
    this.provider.deleteTaskList(taskList.id).then(res => {
      console.log(taskList.name + ' deleted');
      this.provider.getTaskLists().then(r => {
        this.taskLists = r;
      });
    });
  }

  createTaskList() {
    if (this.name !== '') {
      this.provider.createTaskList(this.name).then(res => {
        this.name = '';
        this.taskLists.push(res);
      });
    }
  }
}
