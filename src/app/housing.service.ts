import { Injectable } from '@angular/core';
import {Houselocation} from "./houselocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://picsum.photos/800/233';
  housingLocationList: Houselocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}`,
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
  ];

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  } 

  getAllHousingLocations(): Houselocation[] {
    return this.housingLocationList;
  }
  getHousingLocationById(id: number): Houselocation | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }
}
