import { FormControl } from "../../node_modules/@angular/forms";

export class CustomValidators {
  static validateEmail(control: FormControl) {
    // tslint:disable-next-line:max-line-length
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("validate:", control.value);
    if (reg.test(control.value)) {
      return null;
    }
    return { invalidEmail: true };
  }
}
