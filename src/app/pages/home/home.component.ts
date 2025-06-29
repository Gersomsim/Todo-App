import { Component } from '@angular/core';
import { LayoutAppComponent } from '../../layout/layout-app/layout-app.component';
import { AsideComponent } from '../../components/organism/aside/aside.component';
import { TaskComponent } from '../../components/molecules/task/task.component';
import { PaginationComponent } from '../../components/molecules/pagination/pagination.component';
import { FiltersComponent } from '../../components/molecules/filters/filters.component';
import { StatsComponent } from '../../components/molecules/stats/stats.component';
import { NewTaskComponent } from '../../components/organism/new-task/new-task.component';

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
