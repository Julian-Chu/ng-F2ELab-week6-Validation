import { User } from "./models";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  page = 4;
  user = new User();
  onNextPage(data: Array<any>) {
    this.page++;
    Object.keys(data).map(key => {
      this.user[key] = data[key];
    });
    console.log(this.user);
  }
}
