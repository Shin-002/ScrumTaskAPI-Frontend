import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../api.service';
import { Task } from '../../modeltypes';
import { Sprint } from '../../modeltypes';
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

  idsprint: string = "1"
  faTrash = faTrash
  faEdit = faEdit
  faThumbtack = faThumbtack

  @Input() tasks: Task[] = []
  @Input() sprints: Sprint[] = []

  @Output() selectTask = new EventEmitter<Task>()
  @Output() createNewTask = new EventEmitter()
  @Output() editedTask = new EventEmitter<Task>()
  @Output() deletedTask = new EventEmitter<Task>()

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  taskClicked(task: Task){
    this.selectTask.emit(task)
  }

  createTask() {
    this.createNewTask.emit()
  }

  editTask(task: Task) {
    this.editedTask.emit(task)
  }

  deleteTask(task: Task) {
    this.deletedTask.emit(task)
  }

  onChangeSelect(value) {
    this.idsprint = value
    console.log(this.idsprint)
  }

}
