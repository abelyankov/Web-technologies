import { EventEmitter, Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import { ITaskList, ITask } from '../app/itask-list';
import { ITaskDetail } from '../app/itask-list';

@Injectable({
  providedIn: 'root'
})
export class TaskListSevice extends MainService {

  constructor(http: HttpClient) {
    super(http);
   }
   
   public sendMessage = new EventEmitter<string>();

  getTaskLists(): Promise<ITaskList[]> {
    return this.get('http://127.0.0.1:8000/task_lists', {});
  }

  getTaskListDetail(id: number): Promise<ITaskList> {
    return this.get(`http://localhost:8000/task_lists/${id}/`, {});
  }

  getTaskListTasks(id: number): Promise<ITaskDetail[]> {
    return this.get(`http://localhost:8000/task_lists/${id}/tasks/`, {});
  }

  getTaskDetail(id: number): Promise<ITask> {
    return this.get(`http://localhost:8000/tasks/${id}`, {});
  }
}