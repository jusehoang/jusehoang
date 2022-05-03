import { FormGroup } from "@angular/forms";

export function validateControlsValue(firstControlName: string, secondControlName: string) {
  return function(formGroup: FormGroup) {
    const firstControlValue = formGroup.get(firstControlName)?.value;
    const secondControlValue= formGroup.get(secondControlName)?.value;
    return secondControlValue ?
    firstControlValue === secondControlValue ? null : { confirm: true, error: true }
    : { error: true, required: true };
  };
}
