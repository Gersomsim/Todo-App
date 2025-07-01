import { Dialog } from '@angular/cdk/dialog';
import { NgClass } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Category } from '@core/domain/models';
import { CategoryColors } from '@core/domain/types/category-colors';
import { CategoryFacade } from '@infrastructure/state/facades/category.facade';
import { NewCategoryComponent } from '../../organism/new-category/new-category.component';

@Component({
  selector: 'app-widget-categories',
  standalone: true,
  imports: [NgClass],
  templateUrl: './widget-categories.component.html',
  styleUrl: './widget-categories.component.css',
})
export class WidgetCategoriesComponent {
  dialog = inject(Dialog);
  categoryFacade = inject(CategoryFacade);
  categories = signal<Category[]>([]);
  loading = signal(true);

  ngOnInit() {
    this.categoryFacade.items$.subscribe((categories) => {
      this.categories.set(categories);
    });
    this.categoryFacade.loadAll();
    this.loading.set(false);
  }

  openDialog() {
    this.dialog.open(NewCategoryComponent, {
      data: {
        categories: this.categories(),
      },
    });
  }

  getColor(color?: CategoryColors) {
    if (!color)
      return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800';
    const colors = {
      purple:
        'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800',
      blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800',
      green:
        'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800',
      yellow:
        'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800',
      red: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800',
      indigo:
        'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 hover:bg-indigo-200 dark:hover:bg-indigo-800',
    };
    return colors[color];
  }
}
