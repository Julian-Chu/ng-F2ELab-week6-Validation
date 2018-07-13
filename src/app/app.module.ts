import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PageCreateAccountComponent } from './page-create-account/page-create-account.component';
import { PageGeneralInformationComponent } from './page-general-information/page-general-information.component';

@NgModule({
  declarations: [AppComponent, PageCreateAccountComponent, PageGeneralInformationComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
