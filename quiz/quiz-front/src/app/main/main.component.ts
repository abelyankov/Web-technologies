import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ProviderService} from '../provider.service';
import {Ipost} from '../ipost';

@Component({
  selector: 'app-task-list',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public taskLists: Ipost[] = [];
  public title: any = '';
  public body: any = '';


  constructor(
    private provider: ProviderService,
    private location: Location
  ) { }

  ngOnInit() {
    this.provider.getPosts().then(res => {
      this.taskLists = res;
    });
  }

  updatePost(taskList: Ipost) {
    this.provider.updatePost(taskList).then(res => {
      console.log(taskList.title + ' updated');
    });
  }

  deletePost(post: Ipost) {
    this.provider.deletePost(post.id).then(res => {
      console.log(post.title + ' deleted');
      this.provider.getPosts().then(r => {
        this.taskLists = r;
      });
    });
  }

  createPost() {
    if (this.title !== '') {
      this.provider.createPost(this.title, this.body).then(res => {
        this.title = '';
        this.body = '';
        this.taskLists.push(res);
      });
    }
  }
}
