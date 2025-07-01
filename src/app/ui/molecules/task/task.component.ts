import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PriorityTask } from '@core/domain/enum/priority-task.enum';
import { Task } from '@core/domain/models';
import { TagComponent } from '@ui/atoms/tag/tag.component';
import { TaskStatusComponent } from '../task-status/task-status.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { BadgeTaskComponent } from '../badge-task/badge-task.component';
import { OptionTaskComponent } from '../option-task/option-task.component';
import { ExpirationCompleteComponent } from '../expiration-complete/expiration-complete.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    TagComponent,
    TaskStatusComponent,
    BadgeTaskComponent,
    OptionTaskComponent,
    ExpirationCompleteComponent,
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  PriorityTask = PriorityTask;
}
