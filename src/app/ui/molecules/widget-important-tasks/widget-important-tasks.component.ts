import { Dialog } from '@angular/cdk/dialog';
import { Component, computed, inject, signal } from '@angular/core';
import { Task } from '@core/domain/models';
import { TasksHighComponent } from '../tasks-high/tasks-high.component';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';
import { ExpirationCompleteComponent } from '../expiration-complete/expiration-complete.component';

@Component({
  selector: 'app-widget-important-tasks',
  standalone: true,
  imports: [ExpirationCompleteComponent],
  templateUrl: './widget-important-tasks.component.html',
  styleUrl: './widget-important-tasks.component.css',
})
export class WidgetImportantTasksComponent {
  dialog = inject(Dialog);
  taskFacade = inject(TaskFacade);

  tasks = signal<Task[]>([]);
  loading = signal(true);
  today = new Date().toISOString().split('T')[0];

  tasksImportant = computed(() => {
    return this.tasks().slice(0, 3);
  });

  ngOnInit() {
    this.taskFacade.getTasksImportant(this.today).then((tasks) => {
      this.tasks.set(tasks);
      this.loading.set(false);
    });
  }

  onViewAllImportantTasks() {
    this.dialog.open(TasksHighComponent, {
      data: {
        tasks: this.tasks(),
      },
    });
  }
}
