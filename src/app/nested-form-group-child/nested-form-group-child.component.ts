// src/app/nested-from-group/nested-from-group.component.ts

import { Component } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { AddressForm, ProfileForm } from "../types";

@Component({
  selector: "app-nested-form-group-child",
  templateUrl: "nested-form-group-child.component.html",
})
export class NestedFormGroupChildComponent {
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
}
