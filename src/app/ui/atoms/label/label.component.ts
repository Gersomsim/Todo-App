import { Component, Input } from '@angular/core';
import { Size } from '@ui/types/size.type';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [],
  template: ` <label for="email" [class]="getSizeClass()">
    <ng-content></ng-content>
  </label>`,
  styles: [],
})
export class LabelComponent {
  @Input() for: string = '';
  @Input() size: Size = 'md';

  getSizeClass() {
    const baseClass = 'font-medium block';
    const sizeClass = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-lg',
      xl: 'text-xl',
    };
    return `${baseClass} ${sizeClass[this.size]}`;
  }
}
