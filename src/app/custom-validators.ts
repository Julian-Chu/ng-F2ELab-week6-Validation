import { FormControl } from "../../node_modules/@angular/forms";

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
}
