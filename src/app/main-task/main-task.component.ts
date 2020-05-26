import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Task } from '../modeltypes';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.css']
})
export class MainTaskComponent implements OnInit {

  tasks: Task[] = [];

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
  }

}
