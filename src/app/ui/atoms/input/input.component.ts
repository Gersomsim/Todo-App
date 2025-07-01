import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputType } from '@ui/types/input.type';
import { Size } from '@ui/types/size.type';
import { distinctUntilChanged, fromEvent, map, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @ViewChild('inputElement') inputElement!: ElementRef<HTMLInputElement>;
  @Input() size: Size = 'md';
  @Input() type: InputType = 'text';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;

  private currentValue: any = '';
  public valueChanges$ = new Subject<any>();
  private destroy$ = new Subject<void>();

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

  ngAfterViewInit(): void {
    // Sincroniza el valor inicial
    this.updateInputValue(this.currentValue);

    // Configura el observable de cambios
    this.setupValueChanges();
  }
  private setupValueChanges(): void {
    fromEvent(this.inputElement.nativeElement, 'input')
      .pipe(
        map((event: Event) => (event.target as HTMLInputElement).value),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe((value) => {
        this.currentValue = value;
        this.onChange(value);
        this.valueChanges$.next(value);
      });
  }
  private updateInputValue(value: any): void {
    if (this.inputElement?.nativeElement) {
      this.inputElement.nativeElement.value =
        value !== null && value !== undefined ? value : '';
    }
  }

  onChange = (value: string) => {};
  onTouched = () => {};
  onBlur = () => {};

  writeValue(value: string): void {
    this.currentValue = value;
    this.updateInputValue(value);
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.valueChanges$.complete();
  }
}
