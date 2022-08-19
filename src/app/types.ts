import { FormControl, FormGroup } from "@angular/forms";

export type SimpleProfileForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  line1: FormControl<string>;
  line2?: FormControl<string | null>;
  zipCode: FormControl<string>;
  city: FormControl<string>;
  state: FormControl<string>;
  country: FormControl<string>;
};

export type ProfileForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  address: FormGroup<AddressForm>;
};

export type AddressForm = {
  line1: FormControl<string>;
  line2?: FormControl<string | null>;
  zipCode: FormControl<string>;
  city: FormControl<string>;
  state: FormControl<string>;
  country: FormControl<string>;
};
