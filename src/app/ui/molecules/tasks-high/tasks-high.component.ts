import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject, signal } from '@angular/core';
import { Task } from '@core/domain/models';
import { TaskComponent } from '../task/task.component';

interface TransferTask {
  tasks: Task[];
}

@Component({
  selector: 'app-tasks-high',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks-high.component.html',
  styleUrl: './tasks-high.component.css',
})
export class TasksHighComponent {
  modal = inject(DIALOG_DATA);
  tasks = signal<Task[]>(this.modal.tasks);
}
