import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTaskComponent } from './main-task.component';
import {Routes, RouterModule} from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { ApiService } from '../api.service';

const routes: Routes = [
  {path: 'tasks', component: MainTaskComponent}
]


@NgModule({
  declarations: [MainTaskComponent, TaskListComponent, TaskFormComponent, TaskDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [
    ApiService,
  ]
})
export class MainTaskModule { }
