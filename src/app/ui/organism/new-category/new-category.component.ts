import { Component } from '@angular/core';
import { FormCategoryComponent } from '@ui/molecules/form-category/form-category.component';

@Component({
  selector: 'app-new-category',
  standalone: true,
  imports: [FormCategoryComponent],
  templateUrl: './new-category.component.html',
  styleUrl: './new-category.component.css',
})
export class NewCategoryComponent {}
