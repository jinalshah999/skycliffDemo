import { Routes, RouterModule } from "@angular/router";
import { DemoComponent } from "./demo/demo.component";
import { ArrdemoComponent } from "./arrdemo/arrdemo.component";
import { CalcComponent } from "./calc/calc.component";

const arr: Routes = [
  { path: "", component: DemoComponent },
  { path: "arrdemo", component: ArrdemoComponent },
  { path: "calc", component: CalcComponent }
];

export const routing = RouterModule.forRoot(arr);
