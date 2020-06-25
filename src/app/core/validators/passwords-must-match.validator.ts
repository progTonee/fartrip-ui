import { FormGroup } from '@angular/forms';

export const passwordsMustMatch = (passwordControlName: string, passwordMatchingControlName: string): any => {
  return (formGroup: FormGroup): void => {
    const password = formGroup.controls[passwordControlName];
    const passwordMatching = formGroup.controls[passwordMatchingControlName];

    if (passwordMatching.errors && !passwordMatching.errors.mustMatch) {
      return;
    }

    if (password.value !== passwordMatching.value) {
      passwordMatching.setErrors({ mustMatch: true });
    } else {
      passwordMatching.setErrors(null);
    }
  };
};
