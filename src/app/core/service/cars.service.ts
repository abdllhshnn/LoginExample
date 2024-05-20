import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  path = `${environment.APIURL}`;

  constructor(private http: HttpClient) {
  }

  getAllCars() {
    return this.http.get(`${this.path}/car/visitors/all`)
  }
}
