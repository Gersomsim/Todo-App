import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '@core/domain/models';
import { CategoryFacade } from '@infrastructure/state/facades/category.facade';
import { Option } from '@shared/interfaces';
import { ButtonComponent } from '@ui/atoms/button/button.component';
import { InputComponent } from '@ui/atoms/input/input.component';
import { LabelComponent } from '@ui/atoms/label/label.component';
import { SelectComponent } from '@ui/atoms/select/select.component';

@Component({
  selector: 'app-form-category',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    LabelComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
  ],
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.css',
})
export class FormCategoryComponent {
  categoryFacade = inject(CategoryFacade);
  dialogRef = inject(DialogRef);
  fb = inject(FormBuilder);

  form = this.fb.group({
    name: ['', Validators.required],
    color: ['purple'],
  });
  colors: Option[] = [
    { value: 'red', label: 'Rojo' },
    { value: 'yellow', label: 'Amarillo' },
    { value: 'green', label: 'Verde' },
    { value: 'blue', label: 'Azul' },
    { value: 'gray', label: 'Gris' },
    { value: 'purple', label: 'Morado' },
  ];

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.categoryFacade
        .create(this.form.value as Partial<Category>)
        .then((category) => {
          this.form.reset();
          this.dialogRef.close();
        });
    }
  }
}
