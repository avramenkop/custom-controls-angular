import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-switch',
  templateUrl: './custom-switch.component.html',
  styleUrls: ['./custom-switch.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSwitchComponent),
    multi: true
  }]
})
export class CustomSwitchComponent implements OnInit,  ControlValueAccessor {

  value
  switchControl = new FormControl()

  constructor() { }

  ngOnInit(): void {
    this.switchControl.valueChanges.subscribe(val => {
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
