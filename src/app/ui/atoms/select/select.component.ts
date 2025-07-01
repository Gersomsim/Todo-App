import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Option } from '@shared/interfaces';
import { Size } from '@ui/types/size.type';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true,
    },
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  select = new FormControl();
  @Input() options: Option[] = [];
  @Input() size: Size = 'md';
  @Input() disabled: boolean = false;

  getClass() {
    const base =
      'mt-2 w-full appearance-none rounded-md bg-white dark:bg-gray-700 py-1.5 pr-8 pl-3 text-base text-gray-900 dark:text-gray-50 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 placeholder:text-gray-500 dark:placeholder:text-gray-400';

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
    this.select.valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  writeValue(value: string): void {
    this.select.setValue(value);
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
