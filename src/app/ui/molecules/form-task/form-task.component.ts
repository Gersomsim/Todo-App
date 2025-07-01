import { Component, inject, signal } from '@angular/core';
import { PriorityTask } from '@core/domain/enum/priority-task.enum';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '@ui/atoms/input/input.component';
import { LabelComponent } from '@ui/atoms/label/label.component';
import { ButtonComponent } from '@ui/atoms/button/button.component';
import { TextareaComponent } from '@ui/atoms/textarea/textarea.component';
import { SelectComponent } from '@ui/atoms/select/select.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Option } from '@shared/interfaces';
import { SearchAndCreateCategoryComponent } from '../search-and-create-category/search-and-create-category.component';
import { TaskFacade } from '@infrastructure/state/facades/task.facade';
import { Task } from '@core/domain/models';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { DateTime } from 'luxon';

interface FormTaskData {
  task: Task | null;
}

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
    CdkAccordionModule,
    SearchAndCreateCategoryComponent,
  ],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})
export class FormTaskComponent {
  taskFacade = inject(TaskFacade);
  modal = inject<FormTaskData>(DIALOG_DATA);
  private dialogRef = inject(DialogRef);
  fb = inject(FormBuilder);
  task = signal<Task | null>(null);
  showDetails = signal(false);

  openDetails = signal(false);
  priorityOptions: Option[] = Object.values(PriorityTask).map((priority) => ({
    value: priority,
    label: priority.toUpperCase(),
  }));

  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    priority: ['', Validators.required],
    category_id: ['', Validators.required],
    dueDate: [''],
  });

  ngOnInit() {
    if (this.modal.task !== null) {
      this.task.set(this.modal.task);
      let dueDate = '';
      if (this.modal.task.dueDate) {
        dueDate = DateTime.fromJSDate(new Date(this.modal.task.dueDate))
          .toFormat('yyyy-MM-dd')
          .toString();
      }

      this.form.patchValue({
        title: this.modal.task.title,
        description: this.modal.task.description,
        priority: this.modal.task.priority,
        category_id: this.modal.task.category.id,
        dueDate: dueDate,
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.modal.task === null) {
        this.createTask();
      } else {
        this.updateTask();
      }
    }
  }
  createTask() {
    this.taskFacade.create(this.form.value as Partial<Task>).then((task) => {
      if (task) {
        this.form.reset();
        this.dialogRef.close();
      }
    });
  }
  updateTask() {
    this.taskFacade
      .update(this.task()!.id, this.form.value as Partial<Task>)
      .then((task) => {
        if (task) {
          this.form.reset();
          this.dialogRef.close();
        }
      });
  }
}
