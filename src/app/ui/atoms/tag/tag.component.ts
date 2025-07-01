import { Component, Input } from '@angular/core';
import { Icon } from '@ui/types/icon.type';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [IconComponent],
  template: `
    <span class="flex items-center gap-1">
      @if (icon) {
      <app-icon [icon]="icon" />
      }
      {{ label }}
    </span>
  `,
})
export class TagComponent {
  @Input() label!: string;
  @Input() icon?: Icon;
}
