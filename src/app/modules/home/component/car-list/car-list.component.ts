import { Component } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {CarsState, CarsStateModel} from "../../../../core/state/cars.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
constructor(private store:Store) {
}
@Select(CarsState.getState) Cars$: Observable<CarsStateModel> | undefined
}
