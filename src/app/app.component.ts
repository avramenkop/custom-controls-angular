import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      switch: ['', Validators.required],
      checkbox: ['', Validators.required],
    })
  }


  submit() {
    console.log(this.form.value);
  }
}
