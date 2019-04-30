import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {ProviderService} from '../provider.service';
import {Ipost} from '../ipost';

@Component({
  selector: 'app-task-list-detail',
  templateUrl: './task-list-detail.component.html',
  styleUrls: ['./task-list-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  public tasks: Ipost[] = [];
  public taskList: any = {};

  public id: number;

  constructor(
    private provider: ProviderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.provider.getPostDetail(this.id).then(res => {
        this.taskList = res;
      });
    }
  }

  navigateBack() {
    this.location.back();
  }
}
