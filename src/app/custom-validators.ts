import { FormControl, FormGroup } from "../../node_modules/@angular/forms";

export class CustomValidators {
  static validateEmail(control: FormControl) {
    const reg = new RegExp(
      // tslint:disable-next-line:max-line-length
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (reg.test(control.value)) {
      return null;
    }
    return { invalidEmail: true };
  }

  static validatePassword(control: FormControl) {
    const reg = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    );
    if (reg.test(control.value)) {
      return null;
    }
    return { invalidPassword: true };
  }

  static matchPassword(passwordFieldName: string, repasswordFieldName: string) {
    return (group: FormGroup) => {
      const password = group.get(passwordFieldName);
      const repassword = group.get(repasswordFieldName);
      if (password.value !== repassword.value) {
        return repassword.setErrors({ mismatchPassword: true });
      }
    };
  }

  static checkCreditCardType(
    cardNumberFieldName: string,
    cardTypeFieldName: string
  ) {
    return (group: FormGroup) => {
      const cardNumber = group.get(cardNumberFieldName);
      const cardTypeControl = group.get(cardTypeFieldName);
      const number = cardNumber.value;
      console.log(number);

      const mastercardReg = new RegExp("^5[1-5][0-9]{14}$");
      const visacardReg = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
      const jcbcardReg = new RegExp("^(?:2131|1800|35\\d{3})\\d{11}$");

      if (cardNumber.value === "" || cardNumber.value === null) {
        return cardNumber.setErrors({ required: true });
      } else if (visacardReg.test(cardNumber.value)) {
        return cardTypeControl.patchValue(
          {
            cardType: "Visa"
          },
          {
            emitEvent: false,
            onlySelf: true
          }
        );
      } else if (jcbcardReg.test(cardNumber.value)) {
        return cardTypeControl.patchValue("JCB");
      } else if (mastercardReg.test(cardNumber.value)) {
        return cardTypeControl.patchValue("Master");
      }

      return cardNumber.setErrors({ invalidCreditCard: true });
    };
  }
}
