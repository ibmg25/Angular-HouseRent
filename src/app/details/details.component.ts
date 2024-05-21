import { Component, inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HousingService} from "../housing.service";
import {Houselocation} from "../houselocation";
import {JsonPipe} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  housingService = inject(HousingService)
  housingLocation: Houselocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  })
 
  constructor() {
   const housingLocationId = Number(this.route.snapshot.params['id'])
   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId)
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
 

}
