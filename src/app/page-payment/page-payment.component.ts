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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        cardNumber: [null, [Validators.required]],
        cardholderName: ["", [Validators.required]],
        cardType: "",
        bank: ["", [Validators.required]],
        cvv: [
          "",
          [
            Validators.required,
            Validators.maxLength(3),
            Validators.minLength(3)
          ]
        ],
        expireMonth: ["", [Validators.required]],
        expireYear: ["", [Validators.required]]
      },
      {
        validator: CustomValidators.checkCreditCardType(
          "cardNumber",
          "cardType"
        )
      }
    );

    this.cardNumber = this.form.get("cardNumber") as FormControl;
  }

  goToNextPage() {
    this.toNextPage.emit(this.form.value);
  }

  printMsg() {
    console.log(this.cardNumber.errors);
  }
}
