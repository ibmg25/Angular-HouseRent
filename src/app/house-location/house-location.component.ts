import { Component, Input } from '@angular/core';
import {Houselocation} from "../houselocation";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './house-location.component.html',
  styleUrl: './house-location.component.scss'
})
export class HouseLocationComponent {
  @Input() houseLocation!: Houselocation;
}
