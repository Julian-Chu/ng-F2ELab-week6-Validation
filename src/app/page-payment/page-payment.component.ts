import { FormGroup, FormBuilder, Validators } from "@angular/forms";
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
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        cardNumber: ["", [Validators.required]],
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
  }

  goToNextPage() {
    this.toNextPage.emit(this.form.value);
  }
}
