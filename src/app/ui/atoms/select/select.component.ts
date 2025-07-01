import { Component, Input } from '@angular/core';
import { Option } from '@shared/interfaces';
import { Size } from '@ui/types/size.type';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  @Input() options: Option[] = [];
  @Input() size: Size = 'md';

  getClass() {
    const base =
      'col-start-1 mt-2 row-start-1 w-full appearance-none rounded-md bg-white dark:bg-gray-700 py-1.5 pr-8 pl-3 text-base text-gray-900 dark:text-gray-50 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2';

    const sizeClass = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };

    return `${base} ${sizeClass[this.size]}`;
  }
}
