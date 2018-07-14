import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PageCreateAccountComponent } from "./page-create-account/page-create-account.component";
import { PageGeneralInformationComponent } from "./page-general-information/page-general-information.component";
import { PageUpdateProfilePictureComponent } from "./page-update-profile-picture/page-update-profile-picture.component";
import { PagePaymentComponent } from "./page-payment/page-payment.component";
import { PageCongratulationComponent } from "./page-congratulation/page-congratulation.component";

@NgModule({
  declarations: [
    AppComponent,
    PageCreateAccountComponent,
    PageGeneralInformationComponent,
    PageUpdateProfilePictureComponent,
    PagePaymentComponent,
    PageCongratulationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
