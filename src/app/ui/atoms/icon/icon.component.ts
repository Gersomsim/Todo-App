import { Component, computed, inject, Input } from '@angular/core';
import { Icon } from '@ui/types/icon.type';
import { iconGenerator } from '../../../utils/icon-generator.util';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [],
  template: ` <span [innerHTML]="iconHtml()"></span> `,
})
export class IconComponent {
  sanitizer = inject(DomSanitizer);
  @Input() icon!: Icon;

  iconGenerator = iconGenerator;

  iconHtml = computed(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.iconGenerator(this.icon))
  );
}
