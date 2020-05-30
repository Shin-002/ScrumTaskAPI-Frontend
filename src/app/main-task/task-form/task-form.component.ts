import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { Task } from '../../modeltypes';
import { User } from '../../modeltypes';
import { Sprint } from '../../modeltypes';
import { Tag } from '../../modeltypes';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LengthValidator } from './taskValidator';
import { IntValidator } from './taskValidator'
import { from } from 'rxjs';



@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  id = null
  taskForm

  @Input() users: User[] = []
  @Input() sprints: Sprint[] = []
  @Input() tags: Tag[] = []
  @Input() tasksim: Task

  @Input() set task(data: Task){
    this.id = data.id
    this.taskForm = new FormGroup({
      sprint_pk_id: new FormControl(data.targetsprint.id),
      task: new FormControl(data.task, Validators.compose([Validators.required, LengthValidator.longEnough])),
      description: new FormControl(data.description, Validators.required),
      criteria: new FormControl(data.criteria, Validators.required),
      responsible_pk_id: new FormControl(data.responsible.id),
      estimate: new FormControl(data.estimate, Validators.compose([IntValidator.integer])),
      tag_pk_id: new FormControl(data.targettag.id),
      status: new FormControl(data.status), 
    })
  }

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  saveForm() {
    return 0
  }

  asIsOrder() {
    return 0
  }

}
