import { Component, inject } from '@angular/core';
import { HouseLocationComponent } from '../house-location/house-location.component';
import {HousingService} from "../housing.service";
import { DetailsComponent } from '../details/details.component';
import {Houselocation} from "../houselocation";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HouseLocationComponent, DetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  housingLocationList: Houselocation[] = []
  housingService: HousingService = inject(HousingService);
 constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations()
  }

}
