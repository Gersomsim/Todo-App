import { Component, signal } from '@angular/core';
import { Task } from '@core/domain/models';

@Component({
  selector: 'app-tasks-high',
  standalone: true,
  imports: [],
  templateUrl: './tasks-high.component.html',
  styleUrl: './tasks-high.component.css',
})
export class TasksHighComponent {
  tasks = signal<Task[]>([]);
}
