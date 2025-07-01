import { Component, inject, signal } from '@angular/core';
import { PriorityTask } from '@core/domain/enum/priority-task.enum';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '@ui/atoms/input/input.component';
import { LabelComponent } from '@ui/atoms/label/label.component';
import { ButtonComponent } from '@ui/atoms/button/button.component';
import { TextareaComponent } from '@ui/atoms/textarea/textarea.component';
import { SelectComponent } from '@ui/atoms/select/select.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Option } from '@shared/interfaces';
import { SearchAndCreateCategoryComponent } from '../search-and-create-category/search-and-create-category.component';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';
import { Task } from '@core/domain/models';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputComponent,
    LabelComponent,
    ButtonComponent,
    TextareaComponent,
    SelectComponent,
    IconComponent,
    CdkAccordionModule,
    SearchAndCreateCategoryComponent,
  ],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})
export class FormTaskComponent {
  taskFacade = inject(TaskFacade);
  modal = inject(DIALOG_DATA);
  private dialogRef = inject(DialogRef);
  fb = inject(FormBuilder);

  openDetails = signal(false);
  priorityOptions: Option[] = Object.values(PriorityTask).map((priority) => ({
    value: priority,
    label: priority.toUpperCase(),
  }));

  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    priority: [PriorityTask.LOW, Validators.required],
    category_id: ['', Validators.required],
    dueDate: [''],
  });

  onSubmit() {
    if (this.form.valid) {
      this.taskFacade.create(this.form.value as Partial<Task>).then((task) => {
        if (task) {
          this.form.reset();
          this.dialogRef.close();
        }
      });
    }
  }
}
