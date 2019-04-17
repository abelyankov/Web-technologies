import { Injectable } from '@angular/core';
// import { ITask } from './itask';
import {ITaskList} from './itask-list';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {

  constructor(private http: HttpClient) { }
  taskListURL = 'http://127.0.0.1:8000/task_lists'

  getTaskLists(): Promise<ITaskList[]> {
    return this.http.get(this.taskListURL).toPromise().then(
      response => response as ITaskList[]
      );
  }
}