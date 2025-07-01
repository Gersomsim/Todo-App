import { Component, inject } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { FormTaskComponent } from '../../molecules/form-task/form-task.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  modal = inject(Dialog);

  openForm() {
    this.modal.open(FormTaskComponent, {
      minWidth: '300px',
      data: {
        task: null,
      },
    });
  }
}
