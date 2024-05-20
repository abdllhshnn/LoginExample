import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {CarsService} from "../service/cars.service";
import {CarsAction} from "./action/cars.action";
import {tap} from "rxjs";

export interface CarsStateModel {
  cars?: []
}
@Injectable()
@State<CarsStateModel>({
  name:'CarsState',
  defaults: {
    cars: []
  },
})
export class CarsState{
  constructor(private service: CarsService) {
  }
  @Selector()
  public static getState(state:CarsStateModel){
    return state
  }

  @Action(CarsAction)
  getCars({patchState}:StateContext<CarsStateModel>){
    return this.service.getAllCars().pipe(
      tap((car:any) => {
        patchState({
          cars:car

        })
      })
    )

  }
}
