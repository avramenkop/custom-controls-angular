import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  form: FormGroup;
  isValid = true
  switch

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      switch: [false, [Validators.required, Validators.requiredTrue]],
      checkbox: [false, [Validators.required, Validators.requiredTrue]],
    })
  }

  submit() {
    if (this.form.valid) {
      this.isValid = true
      console.log(this.form.value)
    } else {
      this.isValid = false
    }
  }
}
