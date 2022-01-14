import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static ageValidator(controlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      if (!control?.value || parseInt(control?.value)< 18) {
        controls.get(controlName)?.setErrors({ age: true});
        return {age: true};
      } else {
        return null;
      }
    };
  }
}
