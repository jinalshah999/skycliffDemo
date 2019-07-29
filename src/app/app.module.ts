import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { CalcComponent } from './calc/calc.component';
import { ArrdemoComponent } from './arrdemo/arrdemo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    ArrdemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
