import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-page-create-account",
  templateUrl: "./page-create-account.component.html",
  styleUrls: ["./page-create-account.component.css"]
})
export class PageCreateAccountComponent implements OnInit {
  form: FormGroup;
  @Output() toNextPage = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      account: ["11", [Validators.required]],
      password: null,
      repassword: null
    });
  }

  goToNextPage() {
    console.log(this.form.value);
    this.toNextPage.emit(this.form.value);
  }
}
