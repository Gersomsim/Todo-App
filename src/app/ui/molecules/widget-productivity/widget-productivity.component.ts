import { Component, computed, inject, signal } from '@angular/core';
import { Task } from '@core/domain/models';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';

@Component({
  selector: 'app-widget-productivity',
  standalone: true,
  imports: [],
  templateUrl: './widget-productivity.component.html',
  styleUrl: './widget-productivity.component.css',
})
export class WidgetProductivityComponent {
  taskFacade = inject(TaskFacade);
  workingTasks = signal<Task[]>([]);
  today = new Date();
  taskToday = computed(() => {
    return this.workingTasks().filter(
      (task) => task.dueDate === this.today && !task.completed
    );
  });
  taskCompleted = computed(() => {
    return this.workingTasks().filter(
      (task) => task.completed && task.completedAt === this.today
    );
  });

  ngOnInit() {
    this.taskFacade.items$.subscribe((tasks) => {
      this.workingTasks.set(tasks);
    });
  }
}
