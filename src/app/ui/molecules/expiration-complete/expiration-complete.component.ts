import { Component, computed, Input } from '@angular/core';
import { Task } from '@core/domain/models';
import { IconComponent } from '@ui/atoms/icon/icon.component';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-expiration-complete',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './expiration-complete.component.html',
  styleUrl: './expiration-complete.component.css',
})
export class ExpirationCompleteComponent {
  @Input() icon = false;
  @Input() task!: Task;
  today = DateTime.now();

  label = computed(() => {
    if (!this.task.dueDate) {
      return '';
    }
    const taskDate = DateTime.fromJSDate(new Date(this.task.dueDate));
    if (taskDate.hasSame(this.today, 'day')) {
      return 'Vence hoy';
    }
    return taskDate.toLocaleString(DateTime.DATE_MED);
  });
}
