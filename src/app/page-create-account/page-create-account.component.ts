import { CustomValidators } from "./../custom-validators";
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
  account: FormControl;
  password: FormControl;
  repassword: FormControl;
  @Output() toNextPage = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      account: ["", [Validators.required, CustomValidators.validateEmail]],
      matchingPasswords: this.fb.group(
        {
          password: [
            null,
            [Validators.required, CustomValidators.validatePassword]
          ],
          repassword: [null, [Validators.required]]
        },
        { validator: CustomValidators.matchPassword("password", "repassword") }
      )
    });

    this.account = this.form.get("account") as FormControl;
    const matchingPasswords = this.form.controls[
      "matchingPasswords"
    ] as FormGroup;
    this.password = this.form.get("matchingPasswords.password") as FormControl;
    this.repassword = matchingPasswords.get("repassword") as FormControl;
  }

  goToNextPage() {
    console.log(this.form.errors);
    console.log(this.form.value);
    this.toNextPage.emit(this.form.value);
  }
}
