import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from '../modeltypes';
import { User } from '../modeltypes';
import { Sprint } from '../modeltypes';
import { Tag } from '../modeltypes';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {

  tasks: Task[] = [];
  users: User[] = [];
  sprints: Sprint[] = [];
  tags: Tag[] = [];

  selectedTask: Task = null

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getTasks().subscribe(
      (data: Task[]) => {
        this.tasks = data
      },
      error => console.log(error)
    )

    this.apiService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data
      },
      error => console.log(error)
    )

    this.apiService.getSprints().subscribe(
      (data: Sprint[]) => {
        this.sprints = data
      },
      error => console.log(error)
    )

    this.apiService.getTags().subscribe(
      (data: Tag[]) => {
        this.tags = data
      },
      error => console.log(error)
    )
  }

  selectTask(task) {
    this.selectedTask = task
    console.log(this.selectedTask)
  }

}
