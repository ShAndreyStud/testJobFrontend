import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";
import {FindAgeComponent} from "./find-age/find-age.component";
import {StatisticComponent} from "./statistic/statistic.component";

const routes: Routes = [
  {path: "test", component: TestComponent},
  {path: "findAge", component: FindAgeComponent},
  {path: "statistic", component: StatisticComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
