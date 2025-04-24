import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './component/map-component/map-component';
import { Home } from './component/home/home';

const routes: Routes = [
  {path:'',component:Home},
  {path:'app-map-component', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
