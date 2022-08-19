// src/app/reusable-form/reusable-form.component.ts

import { Component } from "@angular/core";
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from "@angular/forms";
import { Subscription } from "rxjs";
import { AddressForm } from "../types";
import { Address } from "./address";
import { COUNTRIES } from "../countries";

@Component({
  selector: "app-reusable-form",
  templateUrl: "reusable-form.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ReusableFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: ReusableFormComponent,
      multi: true,
    },
  ],
  host: {
    "[id]": "id",
  },
})
export class ReusableFormComponent implements ControlValueAccessor, Validator {
  static nextId = 0;
  id = `address-input-${ReusableFormComponent.nextId++}`;

  form = new FormGroup<AddressForm>({
    line1: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    line2: new FormControl(""),
    zipCode: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    city: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    state: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
    country: new FormControl("", {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  subscriptions: Subscription[] = [];
  onTouched: any;

  readonly COUNTRIES = COUNTRIES;

  //#region Implement ControlValueAccessor
  writeValue(value: Address | null): void {
    const address = this.createAddress(value);
    this.form.patchValue(address, { emitEvent: false });
  }

  registerOnChange(fn: (val: Partial<Address> | null) => void): void {
    this.form.valueChanges.subscribe((value) => {
      const address = this.createAddress(value);
      fn(address);
    });
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.form.disable() : this.form.enable();
  }

  //#endregion

  //#region Implement Validator

  validate(control: AbstractControl<Address>): ValidationErrors | null {
    const value = control.value;
    return value && value.isValid() ? null : { address: true };
  }

  //#endregion

  //#region Getters

  get line1FC() {
    return this.form.get("line1");
  }
  get cityFC() {
    return this.form.get("city");
  }
  get stateFC() {
    return this.form.get("state");
  }
  get zipCodeFC() {
    return this.form.get("zipCode");
  }
  get countryFC() {
    return this.form.get("country");
  }

  //#endregion

  private createAddress(value: Partial<Address> | null) {
    return new Address(
      value?.line1 || "",
      value?.zipCode || "",
      value?.city || "",
      value?.state || "",
      value?.country || "",
      value?.line2
    );
  }
}
