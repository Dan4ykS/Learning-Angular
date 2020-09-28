import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { MyValidators } from './MyValidators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  form: FormGroup;
  skills: FormArray;

  constructor(private pageTitle: Title) {
    pageTitle.setTitle('Работа с формами');
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [Validators.email, Validators.required],
        MyValidators.unicEmail
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required),
      }),
      skills: new FormArray([new FormControl('', Validators.required)]),
    });

    this.skills = this.getFormEl('skills') as FormArray;
  }

  submit() {
    console.log(this.form.value);
    this.form.reset();
  }

  getFormEl = (name: string) => this.form.get(name);

  chooseCity() {
    const cityMap = {
        ru: 'Москва',
        ua: 'Киев',
        by: 'Минск',
      },
      city = cityMap[this.getFormEl('address.country').value];

    this.form.patchValue({ address: { city } });
  }

  addNewControl() {
    const control = new FormControl('', Validators.required);
    this.skills.push(control);
  }
}
