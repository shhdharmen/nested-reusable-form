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
import { Address, AddressForm } from "./address";
import { COUNTRIES } from "./countries";

@Component({
  selector: "app-address-form",
  templateUrl: "address-form.component.html",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AddressFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: AddressFormComponent,
      multi: true,
    },
  ],
  host: {
    "[id]": "id",
  },
})
export class AddressFormComponent implements ControlValueAccessor, Validator {
  static nextId = 0;
  id = `address-input-${AddressFormComponent.nextId++}`;

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
  writeValue(obj: Address | null): void {
    obj && this.form.setValue(obj, { emitEvent: false });
  }

  registerOnChange(fn: (val: Partial<Address> | null) => void): void {
    this.form.valueChanges.subscribe((value) => {
      const address = new Address(
        value.line1 || "",
        value.zipCode || "",
        value.city || "",
        value.state || "",
        value.country || "",
        value.line2
      );
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
    const value = control.value as Address;
    console.log(value);
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
}