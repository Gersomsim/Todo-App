import { Component, computed, inject, signal } from '@angular/core';
import { Task } from '@core/domain/models';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';
import { DateTime } from 'luxon';

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
  today = DateTime.now().toJSDate();
  taskToday = computed(() => {
    return this.workingTasks().filter((task) => {
      if (!task.dueDate) return false;
      const taskDate = DateTime.fromJSDate(new Date(task.dueDate)).toFormat(
        'yyyy-MM-dd'
      );
      const today = DateTime.fromJSDate(this.today).toFormat('yyyy-MM-dd');
      return taskDate === today && !task.completed;
    });
  });
  taskCompleted = computed(() => {
    return this.workingTasks().filter((task) => {
      if (!task.completedAt) return false;
      const taskDate = DateTime.fromJSDate(new Date(task.completedAt)).toFormat(
        'yyyy-MM-dd'
      );
      const today = DateTime.fromJSDate(this.today).toFormat('yyyy-MM-dd');
      return taskDate === today;
    });
  });

  ngOnInit() {
    this.taskFacade.items$.subscribe((tasks) => {
      this.workingTasks.set(tasks);
    });
  }
}
