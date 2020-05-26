import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { Task } from '../../modeltypes';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[] = []

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

}
