import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import {VisVijver} from '../vis-vijver';

@Component({
  selector: 'app-vis-vijver',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink ],
  templateUrl: './vis-vijver.component.html',
  styleUrl: './vis-vijver.component.scss'
})
export class VisVijverComponent {
  @Input() visVijver!: VisVijver
}
