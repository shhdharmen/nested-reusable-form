import { Component } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Address } from "./shared/components/address-form/address";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
})
export class AppComponent {
  title = "reusable-form-group";

  profileFormGroup = this._fb.group<AccountForm>({
    name: this._fb.control("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: this._fb.control("", {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    address: this._fb.control(null),
  });
  address = new Address();
  constructor(private _fb: FormBuilder) {}

  get nameFC() {
    return this.profileFormGroup.get("name");
  }
  get emailFC() {
    return this.profileFormGroup.get("email");
  }
}

type AccountForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  address: FormControl<Address | null>;
};
