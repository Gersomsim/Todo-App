import { Component, Input } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Size } from '@ui/types/size.type';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaComponent,
      multi: true,
    },
  ],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  textarea = new FormControl();
  @Input() size: Size = 'md';
  @Input() rows: number = 4;
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  getClass() {
    const base =
      'col-start-1 mt-2 row-start-1 w-full appearance-none rounded-md bg-white dark:bg-gray-700 py-1.5 pr-8 pl-3 text-base text-gray-900 dark:text-gray-50 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-500 dark:placeholder:text-gray-400';

    const sizeClass = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    };
    return `${base} ${sizeClass[this.size]}`;
  }
  onChange = (value: string) => {};
  onTouched = () => {};
  onBlur = () => {};

  ngAfterViewInit(): void {
    this.textarea.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }
  writeValue(value: string): void {
    this.textarea.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
