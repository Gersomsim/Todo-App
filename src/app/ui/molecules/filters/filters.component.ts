import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PriorityTask } from '@core/domain/types';
import { PriorityTask as Priority } from '@core/domain/enum/priority-task.enum';
import { NgClass } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  PriorityTask = Priority;
  params = signal<{ completed?: boolean; priority?: PriorityTask }>({});
  order = new FormControl('createdAt');

  constructor() {
    this.route.queryParams.subscribe((params) => {
      const queryParams: { completed?: boolean; priority?: PriorityTask } = {};
      if (params['completed']) {
        queryParams.completed = params['completed'] === 'true';
      } else {
        delete queryParams.completed;
      }
      if (params['priority']) {
        queryParams.priority = params['priority'] as PriorityTask;
      } else {
        delete queryParams.priority;
      }

      this.params.set(queryParams);
    });
  }

  onFilter(filter: { completed?: boolean; priority?: PriorityTask }) {
    const queryParams = {
      ...this.route.snapshot.queryParams,
      ...filter,
    };
    if (
      filter.completed !== undefined &&
      this.params().completed === filter.completed
    ) {
      delete queryParams.completed;
    }
    if (this.params().priority === filter.priority) {
      delete queryParams.priority;
    }

    const path = this.route.snapshot.routeConfig?.path;

    this.router.navigate([path], {
      queryParams,
    });
  }

  clearFilter() {
    const path = this.route.snapshot.routeConfig?.path;
    this.router.navigate([path], {});
  }

  onOrder() {
    const queryParams = {
      ...this.route.snapshot.queryParams,
      order: this.order.value,
    };

    const path = this.route.snapshot.routeConfig?.path;
    this.router.navigate([path], {
      queryParams,
    });
  }
}
