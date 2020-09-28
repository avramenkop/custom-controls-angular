import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox',
  templateUrl: './custom-checkbox.component.html',
  styleUrls: ['./custom-checkbox.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomCheckboxComponent),
    multi: true
  }]
})
export class CustomCheckboxComponent implements OnInit, ControlValueAccessor {

  value
  checkboxControl = new FormControl()

  constructor() { }

  ngOnInit(): void {
    this.checkboxControl.valueChanges.subscribe(val => {
      console.log(val)
    })
  }

  onChange: any = () => {}
  onTouch: any = () => {}

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouch = fn
  }


}


