import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomSwitchComponent } from './custom-inputs/custom-switch/custom-switch.component';
import { CustomCheckboxComponent } from './custom-inputs/custom-checkbox/custom-checkbox.component';
import {ReactiveFormsModule} from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CustomSwitchComponent,
    CustomCheckboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    InputsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
