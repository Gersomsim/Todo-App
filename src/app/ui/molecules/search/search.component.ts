import { Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PriorityTask } from '@core/domain/types';
import { PriorityTask as Priority } from '@core/domain/enum/priority-task.enum';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  search = new FormControl('');
  params = signal<{
    completed?: boolean;
    priority?: PriorityTask;
    dueDate?: string;
  }>({});
  today = new Date().toISOString().split('T')[0];
  PriorityTask = Priority;

  ngOnInit() {
    this.search.setValue(this.route.snapshot.queryParams['search']);
    this.search.valueChanges.pipe(debounceTime(600)).subscribe((value) => {
      const queryParams = {
        ...this.route.snapshot.queryParams,
        search: value,
      };
      this.router.navigate([], { queryParams });
    });
  }

  onFilter(filter: {
    completed?: boolean;
    priority?: PriorityTask;
    dueDate?: string;
  }) {
    const queryParams = {
      ...this.route.snapshot.queryParams,
      ...filter,
    };
    if (this.params().completed === filter.completed) {
      delete queryParams.completed;
    }
    if (this.params().priority === filter.priority) {
      delete queryParams.priority;
    }
    if (this.params().dueDate !== undefined) {
      delete queryParams.dueDate;
    }

    const path = this.route.snapshot.routeConfig?.path;

    this.router.navigate([path], {
      queryParams,
    });
  }
}
