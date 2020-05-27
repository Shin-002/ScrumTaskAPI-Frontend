import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Task } from '../../modeltypes';
import{ faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { from } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  faTrash = faTrash
  faEdit = faEdit
  faThumbtack = faThumbtack

  @Input() tasks: Task[] = []
  @Output() selectTask = new EventEmitter<Task>()

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  taskClicked(task: Task){
    this.selectTask.emit(task)
  }

}
