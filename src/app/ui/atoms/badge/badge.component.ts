import { NgClass } from '@angular/common';
import { Component, computed, Input } from '@angular/core';
import { Color } from '@ui/types/color.type';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [NgClass],
  template: `<span [ngClass]="classes">{{ label }}</span>`,
  styles: [],
})
export class BadgeComponent {
  @Input() label!: string;
  @Input() color: Color = 'gray';

  baseClasses = 'px-2 py-1 text-xs rounded-full';

  classes = '';

  ngOnInit(): void {
    let color = '';
    switch (this.color) {
      case 'red':
        color = 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
        break;
      case 'yellow':
        color =
          'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
        break;
      case 'green':
        color =
          'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
        break;
      case 'blue':
        color = 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
        break;
      default:
        color = 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
        break;
    }
    this.classes = `${this.baseClasses} ${color}`;
  }
}
