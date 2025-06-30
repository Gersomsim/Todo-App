import { NgClass } from '@angular/common';
import { Component, computed, inject, Input, signal } from '@angular/core';
import { IconComponent } from '@ui/atoms/icon/icon.component';
import { PriorityTask } from '@core/domain/enum/priority-task.enum';
import { PriorityTask as Priority } from '@core/domain/types/priority-task.type';
import { Task } from '@core/domain/models';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';

@Component({
  selector: 'app-task-status',
  standalone: true,
  imports: [NgClass, IconComponent],
  templateUrl: './task-status.component.html',
  styleUrl: './task-status.component.css',
})
export class TaskStatusComponent {
  taskFacade = inject(TaskFacade);
  @Input() task!: Task;
  loading = signal(false);
  PriorityTask = PriorityTask;

  ToggleCompleted() {
    this.loading.set(true);
    const { id, ...newTask } = this.task;
    newTask.completed = !newTask.completed;
    this.taskFacade.update(id, newTask as Task).then(() => {
      this.loading.set(false);
    });
  }
  getClasses() {
    const baseClasses =
      'w-5 h-5 mt-1 border-2 rounded-sm cursor-pointer transition-colors flex items-center justify-center';
    let addClasses = '';
    if (this.task.completed) {
      addClasses = 'bg-green-400 border-green-500 ';
    } else {
      switch (this.task.priority) {
        case PriorityTask.HIGH:
          addClasses = 'border-red-500 hover:bg-red-500';
          break;
        case PriorityTask.MEDIUM:
          addClasses = 'border-yellow-500 hover:bg-yellow-500';
          break;
        case PriorityTask.LOW:
          addClasses = 'border-blue-500 hover:bg-blue-500';
          break;
      }
    }
    return `${baseClasses} ${addClasses}`;
  }
}
