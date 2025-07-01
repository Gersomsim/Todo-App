import { Component } from '@angular/core';
import { WidgetActionsComponent } from '@ui/molecules/widget-actions/widget-actions.component';
import { WidgetCategoriesComponent } from '@ui/molecules/widget-categories/widget-categories.component';
import { WidgetImportantTasksComponent } from '@ui/molecules/widget-important-tasks/widget-important-tasks.component';
import { WidgetProductivityComponent } from '@ui/molecules/widget-productivity/widget-productivity.component';
import { WidgetSearchComponent } from '@ui/molecules/widget-search/widget-search.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    WidgetImportantTasksComponent,
    WidgetSearchComponent,
    WidgetCategoriesComponent,
    WidgetProductivityComponent,
    WidgetActionsComponent,
  ],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css',
})
export class AsideComponent {}
