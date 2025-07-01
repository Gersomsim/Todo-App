import { OverlayModule } from '@angular/cdk/overlay';
import { Component, computed, inject, signal } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { Category } from '@core/domain/models';
import { CategoryFacade } from '@infrastructure/state/facades/category.facade';
import { Option } from '@shared/interfaces';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-and-create-category',
  standalone: true,
  imports: [ReactiveFormsModule, OverlayModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SearchAndCreateCategoryComponent,
      multi: true,
    },
  ],
  templateUrl: './search-and-create-category.component.html',
  styleUrl: './search-and-create-category.component.css',
})
export class SearchAndCreateCategoryComponent {
  categoryFacade = inject(CategoryFacade);
  search = new FormControl();
  categories = signal<Category[]>([]);
  searchValue = signal('');
  filteredCategories = computed(() => {
    return this.categories().filter((category) =>
      category.name.toLowerCase().includes(this.searchValue().toLowerCase())
    );
  });
  isOpen = signal(false);

  ngOnInit(): void {
    this.categoryFacade.items$.subscribe((categories) => {
      this.categories.set(categories);
    });
  }

  select(option: Option) {
    this.onChange(option.value);
    this.search.setValue(option.label, { emitEvent: false });
    this.searchValue.set(option.label);
    this.isOpen.set(false);
  }
  clear() {
    this.onChange('');
    this.onTouched();
    this.search.setValue('');
  }

  ngAfterViewInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe((value) => {
      this.isOpen.set(true);
      this.searchValue.set(value || '');
    });
  }

  createCategory(name: string) {
    this.categoryFacade.create({ name }).then((category) => {
      if (category) {
        this.select({ value: category.id, label: category.name });
      }
    });
  }

  onChange = (value: string) => {};
  onTouched = () => {};
  onBlur = () => {};

  writeValue(value: string): void {
    this.search.setValue(value, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
}
