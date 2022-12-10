import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const validateTel: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const regPhone = RegExp(/\d{2,4}-?\d{3,4}-?\d{3,4}#?(\d+)?/);
  return !control.value ? null : regPhone.test(control.value) ? null : { tel: true };
};
