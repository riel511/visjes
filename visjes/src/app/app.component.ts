import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { VisComponent } from './vis/vis.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VisComponent, RouterOutlet, RouterLink ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'visjes';
}
