import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-switch',
  templateUrl: './custom-switch.component.html',
  styles: [
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomSwitchComponent),
    multi: true
  }]
})
export class CustomSwitchComponent implements ControlValueAccessor {

  value

  constructor() { }

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
