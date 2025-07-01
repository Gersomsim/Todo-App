import { Component, computed, inject, signal } from '@angular/core';
import { PriorityTask } from '@core/domain/enum/priority-task.enum';
import { Task } from '@core/domain/models';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  taskFacade = inject(TaskFacade);
  tasks = signal<Task[]>([]);
  totalTasks = computed(() => this.tasks().length);
  totalTasksCompleted = computed(
    () => this.tasks().filter((task) => task.completed).length
  );
  totalTasksPending = computed(
    () => this.tasks().filter((task) => !task.completed).length
  );
  progress = computed(() => {
    const totalTasks = this.totalTasks() || 0;
    const totalTasksCompleted = this.totalTasksCompleted() || 0;
    return Math.round((totalTasksCompleted / totalTasks) * 100) || 0;
  });

  ngOnInit() {
    this.taskFacade.items$.subscribe((tasks) => {
      this.tasks.set(tasks);
    });
  }
}
