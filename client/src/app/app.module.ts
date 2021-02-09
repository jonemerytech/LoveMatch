import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";

@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
