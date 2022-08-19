// src/app/nested-from-group/nested-from-group.component.ts

import { Component } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { COUNTRIES } from "../countries";
import { AddressForm, ProfileForm } from "../types";

@Component({
  selector: "app-nested-form-group",
  templateUrl: "nested-form-group.component.html",
})
export class NestedFormGroupComponent {
  profileFormGroup = new FormGroup<ProfileForm>({
    name: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl("", {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    address: new FormGroup<AddressForm>({
      line1: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      line2: new FormControl(""),
      city: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      state: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      zipCode: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      country: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
    }),
  });

  readonly COUNTRIES = COUNTRIES;
  constructor() {}

  get addressFormGroup() {
    return this.profileFormGroup.get("address") as FormGroup;
  }

  get nameFC() {
    return this.profileFormGroup.get("name");
  }
  get emailFC() {
    return this.addressFormGroup.get("email");
  }
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
