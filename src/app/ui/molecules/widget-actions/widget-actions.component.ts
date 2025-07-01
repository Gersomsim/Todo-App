import { Dialog } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { NewTaskComponent } from '@ui/organism/new-task/new-task.component';
import { FormTaskComponent } from '../form-task/form-task.component';
import { MarkAllCompletedComponent } from '../mark-all-completed/mark-all-completed.component';

@Component({
  selector: 'app-widget-actions',
  standalone: true,
  imports: [],
  templateUrl: './widget-actions.component.html',
  styleUrl: './widget-actions.component.css',
})
export class WidgetActionsComponent {
  dialog = inject(Dialog);

  openDialog() {
    this.dialog.open(FormTaskComponent, {});
  }
  markAllCompleted() {
    this.dialog.open(MarkAllCompletedComponent, {});
  }
}
