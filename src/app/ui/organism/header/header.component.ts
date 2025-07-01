import { Component, computed, inject, signal } from '@angular/core';
import { Task } from '@core/domain/models';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  taskFacade = inject(TaskFacade);
  tasks = signal<Task[]>([]);

  taskCompleted = computed(() => {
    return this.tasks().filter((task) => task.completed);
  });
  tasksPending = computed(() => {
    return this.tasks().filter((task) => !task.completed);
  });
  percentageCompleted = computed(() => {
    return (this.taskCompleted().length / this.tasks().length) * 100 || 0;
  });

  ngOnInit() {
    this.taskFacade.items$.subscribe((tasks) => {
      this.tasks.set(tasks);
    });
  }
}
