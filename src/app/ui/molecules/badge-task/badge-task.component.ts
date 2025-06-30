import { Component, Input } from '@angular/core';
import { PriorityTask } from '@core/domain/enum/priority-task.enum';
import { PriorityTask as Priority } from '@core/domain/types/priority-task.type';
import { BadgeComponent } from '@ui/atoms/badge/badge.component';
import { Color } from '@ui/types/color.type';

@Component({
  selector: 'app-badge-task',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './badge-task.component.html',
  styleUrl: './badge-task.component.css',
})
export class BadgeTaskComponent {
  @Input() completed: boolean = false;
  @Input() priority!: Priority;

  getPriorityColor(): Color {
    switch (this.priority) {
      case PriorityTask.HIGH:
        return 'red';
      case PriorityTask.MEDIUM:
        return 'yellow';
    }
    return 'blue';
  }

  getPriorityLabel(): string {
    switch (this.priority) {
      case PriorityTask.HIGH:
        return 'Urgente';
      case PriorityTask.MEDIUM:
        return 'Media';
    }
    return 'Baja';
  }
}
