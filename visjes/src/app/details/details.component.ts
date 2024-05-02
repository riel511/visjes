import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VissenService } from '../vissen.service';
import { VisVijver } from '../vis-vijver';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(VissenService);
  housingLocation: VisVijver | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
