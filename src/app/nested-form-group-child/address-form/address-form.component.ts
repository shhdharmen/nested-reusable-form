// src/app/nested-form-group-child/address-form/address-form.component.ts

import { Component, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { COUNTRIES } from "src/app/countries";
import { AddressForm } from "src/app/types";

@Component({
  selector: "app-address-form",
  templateUrl: "address-form.component.html",
})
export class AddressFormComponent {
  @Input("formGroup") addressFormGroup!: FormGroup<AddressForm>;
  readonly COUNTRIES = COUNTRIES;
  constructor() {}

  get line1FC() {
    return this.addressFormGroup.get("line1");
  }
  get cityFC() {
    return this.addressFormGroup.get("city");
  }
  get stateFC() {
    return this.addressFormGroup.get("state");
  }
  get zipCodeFC() {
    return this.addressFormGroup.get("zipCode");
  }
  get countryFC() {
    return this.addressFormGroup.get("country");
  }
}
