import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Color } from '@ui/types/color.type';
import { Size } from '@ui/types/size.type';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() size: Size = 'md';
  @Input() rounded: Size = 'sm';
  @Input() color: Color = 'blue';
  @Input() disabled: boolean = false;
  @Input() class: string = '';
  @Input() fullWidth: boolean = false;
  @Output() click = new EventEmitter<void>();

  getClass() {
    const base =
      'shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer';

    const sizeClass = {
      sm: 'text-xs px-2 py-1',
      md: 'text-sm px-2.5 py-1.5',
      lg: 'text-lg px-3 py-2',
      xl: 'text-xl px-3.5 py-2.5',
    };

    const roundedClass = {
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    };

    const colorClass = {
      blue: 'bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600 text-white',
      red: 'bg-red-600 hover:bg-red-500 focus-visible:outline-red-600 text-white',
      green:
        'bg-green-600 hover:bg-green-500 focus-visible:outline-green-600 text-white',
      yellow:
        'bg-yellow-600 hover:bg-yellow-500 focus-visible:outline-yellow-600 text-white',
      gray: 'bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600 text-white',
      purple:
        'bg-purple-600 hover:bg-purple-500 focus-visible:outline-purple-600 text-white',
    };
    const fullWidthClass = this.fullWidth ? 'w-full' : '';
    return `${base} ${sizeClass[this.size]} ${
      colorClass[this.color]
    } ${fullWidthClass} ${roundedClass[this.rounded]} ${this.class}`;
  }
  onClick() {
    this.click.emit();
  }
}
