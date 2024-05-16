import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {CarListComponent} from "./component/car-list/car-list.component";
import {CarDetailComponent} from "./component/car-detail/car-detail.component";

const routes: Routes = [
  {path:'',pathMatch:"full",redirectTo:'home'},
  {
    path:'home', component:HomeComponent,
    children:[
      {path:'cars',component:CarListComponent},
      {path:':vehicleId/detail',component:CarDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
