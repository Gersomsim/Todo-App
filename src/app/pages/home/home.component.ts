import { Component } from '@angular/core';
import { LayoutAppComponent } from '../../layout/layout-app/layout-app.component';
import { AsideComponent } from '../../ui/organism/aside/aside.component';
import { TaskComponent } from '../../ui/molecules/task/task.component';
import { PaginationComponent } from '../../ui/molecules/pagination/pagination.component';
import { FiltersComponent } from '../../ui/molecules/filters/filters.component';
import { StatsComponent } from '../../ui/molecules/stats/stats.component';
import { NewTaskComponent } from '../../ui/organism/new-task/new-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LayoutAppComponent,
    AsideComponent,
    TaskComponent,
    PaginationComponent,
    FiltersComponent,
    StatsComponent,
    NewTaskComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
