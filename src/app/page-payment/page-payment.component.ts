import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { CustomValidators } from "../custom-validators";

@Component({
  selector: "app-page-payment",
  templateUrl: "./page-payment.component.html",
  styleUrls: ["./page-payment.component.css"]
})
export class PagePaymentComponent implements OnInit {
  @Output() toNextPage = new EventEmitter();
  form: FormGroup;
  cardNumber: FormControl;
  cardholderName: FormControl;
  bank: FormControl;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        cardNumber: [null, [Validators.required]],
        cardholderName: ["", [Validators.required]],
        cardType: "",
        bank: ["", [Validators.required]],
        cvv: "",
        expireMonth: "",
        expireYear: ""
      },
      {
        validator: CustomValidators.checkCreditCardType(
          "cardNumber",
          "cardType"
        )
      }
    );

    this.cardNumber = this.form.get("cardNumber") as FormControl;
    this.cardholderName = this.form.get("cardholderName") as FormControl;
    this.bank = this.form.get("bank") as FormControl;
  }

  goToNextPage() {
    this.toNextPage.emit(this.form.value);
  }

  printMsg() {
    console.log(this.cardNumber.errors);
    console.log(this.form.errors);
  }
}
