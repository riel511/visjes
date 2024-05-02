import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisVijverComponent } from '../vis-vijver/vis-vijver.component';
import { VisVijver } from '../vis-vijver';
import { VissenService } from '../vissen.service';

@Component({
  selector: 'app-vis',
  standalone: true,
  imports: [CommonModule, VisVijverComponent],
  templateUrl: './vis.component.html',
  styleUrl: './vis.component.scss'
})
export class VisComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  visVijverList: VisVijver[] = [];
  vissenService: VissenService = inject(VissenService);
  filteredLocationList: VisVijver[] = [];

  constructor() {
    this.vissenService.getAllHousingLocations().then((housingLocationList: VisVijver[]) => {
      this.visVijverList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
    this.filteredLocationList = this.visVijverList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.visVijverList;
      return;
    }
    this.filteredLocationList = this.visVijverList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
