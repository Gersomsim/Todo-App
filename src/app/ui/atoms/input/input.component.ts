import { Component, Input } from '@angular/core';
import { InputType } from '@ui/types/input.type';
import { Size } from '@ui/types/size.type';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() size: Size = 'md';
  @Input() type: InputType = 'text';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  getClass() {
    const base =
      'mt-2 block w-full rounded bg-white dark:bg-gray-700 px-3 py-1.5 text-base text-gray-900 dark:text-gray-50 outline-1 placeholder:text-gray-400 focus:outline-2';

    const sizeClass = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };
    return `${base} ${sizeClass[this.size]}`;
  }
}
