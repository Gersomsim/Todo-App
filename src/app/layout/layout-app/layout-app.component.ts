import { Component } from '@angular/core';
import { HeaderComponent } from '../../ui/organism/header/header.component';
import { FooterComponent } from '../../ui/organism/footer/footer.component';

@Component({
  selector: 'app-layout-app',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './layout-app.component.html',
  styleUrl: './layout-app.component.css',
})
export class LayoutAppComponent {}
