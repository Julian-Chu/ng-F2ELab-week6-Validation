import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-page-create-account",
  templateUrl: "./page-create-account.component.html",
  styleUrls: ["./page-create-account.component.css"]
})
export class PageCreateAccountComponent implements OnInit {
  form: FormGroup;
  account: AbstractControl;
  password: AbstractControl;
  repassword: AbstractControl;
  @Output() toNextPage = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      account: ["", [Validators.required]],
      password: [null, [Validators.required]],
      repassword: [null, [Validators.required]]
    });

    this.account = this.form.get("account");
    this.password = this.form.get("password");
    this.repassword = this.form.get("repassword");
  }

  goToNextPage() {
    console.log(this.form.errors);
    console.log(this.form.value);
    this.toNextPage.emit(this.form.value);
  }
}
