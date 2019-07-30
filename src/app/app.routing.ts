import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { ArrdemoComponent } from "./arrdemo/arrdemo.component";
import { CalcComponent } from "./calc/calc.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const arr: Routes = [
  { path: "", component: DemoComponent },
  { path: "arrdemo", component: ArrdemoComponent },
  { path: "calc", component: CalcComponent },
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing = RouterModule.forRoot(arr);
