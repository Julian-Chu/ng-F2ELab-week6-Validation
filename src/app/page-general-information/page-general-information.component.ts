import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-page-general-information",
  templateUrl: "./page-general-information.component.html",
  styleUrls: ["./page-general-information.component.css"]
})
export class PageGeneralInformationComponent implements OnInit {
  form: FormGroup;
  @Output() toNextPage = new EventEmitter();
  phone: FormControl;
  city: FormControl;
  dist: FormControl;
  addressDetail: FormControl;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      name: "",
      phone: ["", [Validators.required]],
      year: "",
      month: "",
      day: "",
      city: ["", [Validators.required]],
      dist: ["", [Validators.required]],
      addressDetail: ["", [Validators.required]]
    });

    this.phone = this.form.get("phone") as FormControl;
    this.city = this.form.get("city") as FormControl;
    this.dist = this.form.get("dist") as FormControl;
    this.addressDetail = this.form.get("addressDetail") as FormControl;
  }

  goToNextPage() {
    this.toNextPage.emit(this.form.value);
  }
}
