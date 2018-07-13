import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PageCreateAccountComponent } from "./page-create-account/page-create-account.component";
import { PageGeneralInformationComponent } from "./page-general-information/page-general-information.component";
import { PageUpdateProfilePictureComponent } from "./page-update-profile-picture/page-update-profile-picture.component";
import { PagePaymentComponent } from "./page-payment/page-payment.component";

@NgModule({
  declarations: [
    AppComponent,
    PageCreateAccountComponent,
    PageGeneralInformationComponent,
    PageUpdateProfilePictureComponent,
    PagePaymentComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
