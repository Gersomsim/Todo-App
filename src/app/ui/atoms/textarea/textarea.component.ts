import { Component, Input } from '@angular/core';
import { Size } from '@ui/types/size.type';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  @Input() size: Size = 'md';
  @Input() rows: number = 4;
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  getClass() {
    const base =
      'block mt-2 w-full rounded bg-white dark:bg-gray-700 px-3 py-1.5 text-base text-gray-900 dark:text-gray-50 outline-1 placeholder:text-gray-400 focus:outline-2';

    const sizeClass = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };
    return `${base} ${sizeClass[this.size]}`;
  }
}
