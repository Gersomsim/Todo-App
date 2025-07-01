import { Component, inject, Input, signal } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { Dialog } from '@angular/cdk/dialog';
import { FormTaskComponent } from '@ui/molecules/form-task/form-task.component';
import { Task } from '@core/domain/models';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';

@Component({
  selector: 'app-option-task',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './option-task.component.html',
  styleUrl: './option-task.component.css',
})
export class OptionTaskComponent {
  taskFacade = inject(TaskFacade);
  dialog = inject(Dialog);

  @Input() task!: Task;

  isOpen = signal(false);

  openForm() {
    this.isOpen.set(false);
    this.dialog.open(FormTaskComponent, {
      width: '400px',
      height: '400px',
      data: {
        task: this.task,
      },
    });
  }

  completeTask() {
    this.taskFacade.update(this.task.id, {
      completed: !this.task.completed,
    });
    this.isOpen.set(false);
  }

  deleteTask() {
    this.taskFacade.delete(this.task.id);
    this.isOpen.set(false);
  }
}
