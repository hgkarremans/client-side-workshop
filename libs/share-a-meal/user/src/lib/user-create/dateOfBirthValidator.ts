import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function dateOfBirthValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);
    const yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    return selectedDate < yesterday ? null : { 'invalidDateOfBirth': true };
  };
}
