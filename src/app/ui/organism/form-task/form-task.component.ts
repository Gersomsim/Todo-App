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
  ],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css',
})
export class FormTaskComponent {
  fb = inject(FormBuilder);

  openDetails = signal(false);

  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    priority: [PriorityTask.LOW, Validators.required],
    category: ['', Validators.required],
    dueDate: [''],
  });
}
