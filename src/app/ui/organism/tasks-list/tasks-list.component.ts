import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Task } from '@core/domain/models';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';
import { TaskComponent } from '@ui/molecules/task/task.component';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [TaskComponent, CommonModule],
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
})
export class TasksListComponent {
  taskFacade = inject(TaskFacade);

  tasks = signal<Task[]>([]);
  loading = signal(false);

  ngOnInit() {
    this.taskFacade.items$.subscribe((tasks) => {
      this.tasks.set(tasks);
    });
    this.taskFacade.loadAll();
  }
}
