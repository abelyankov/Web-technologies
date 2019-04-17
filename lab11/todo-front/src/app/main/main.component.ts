import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../itask-list';
import { TaskListService } from '../task-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Django';
  task_list: ITaskList[];
  constructor(private taskListService: TaskListService) { }

  ngOnInit() {
    this.getTaskLists();
  }

  getTaskLists(): void{
    // this.task_list = this.taskListService.getTaskLists();
    this.taskListService.getTaskLists()
      .then(task_list => {
        this.task_list = task_list;
        console.log('tasklist', this.task_list);
      });
  }

}