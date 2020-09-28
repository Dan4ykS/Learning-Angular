import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

type validatorReturned = {
  [key: string]: boolean;
};

export class MyValidators {
  static unicEmail(
    control: FormControl
  ): Promise<validatorReturned> | Observable<validatorReturned> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value === 'dan28012000@gmail.com') {
          resolve({
            notUnicEmail: true,
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
