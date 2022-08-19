// src/app/simple-form-group/simple-form-group.component.ts

import { Component } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { COUNTRIES } from "../countries";
import { SimpleProfileForm } from "../types";

@Component({
  selector: "app-simple-form-group",
  templateUrl: "simple-form-group.component.html",
})
export class SimpleFormGroupComponent {
  profileFormGroup = new FormGroup<SimpleProfileForm>({
    name: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl("", {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
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
  });

  readonly COUNTRIES = COUNTRIES;
  constructor() {}

  get nameFC() {
    return this.profileFormGroup.get("name");
  }
  get emailFC() {
    return this.profileFormGroup.get("email");
  }
  get line1FC() {
    return this.profileFormGroup.get("line1");
  }
  get cityFC() {
    return this.profileFormGroup.get("city");
  }
  get stateFC() {
    return this.profileFormGroup.get("state");
  }
  get zipCodeFC() {
    return this.profileFormGroup.get("zipCode");
  }
  get countryFC() {
    return this.profileFormGroup.get("country");
  }
}
