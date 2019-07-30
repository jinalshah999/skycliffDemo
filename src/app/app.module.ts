import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { CalcComponent } from "./calc/calc.component";
import { ArrdemoComponent } from "./arrdemo/arrdemo.component";
import { ApphighDirective } from "./apphigh.directive";
import { HighlighterDirective } from "./highlighter.directive";
import { CardDirective } from "./card.directive";
import { FilterPipe } from "./filter.pipe";
import { MenuComponent } from "./menu/menu.component";
import { routing } from "./app.routing";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CalcComponent,
    ArrdemoComponent,
    ApphighDirective,
    HighlighterDirective,
    CardDirective,
    FilterPipe,
    MenuComponent,
    PagenotfoundComponent
  ],
  imports: [BrowserModule, FormsModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
