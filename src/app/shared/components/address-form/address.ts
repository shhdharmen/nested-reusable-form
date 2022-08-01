import { FormControl } from "@angular/forms";

export interface AddressForm {
  line1: FormControl<string>;
  line2?: FormControl<string | null>;
  zipCode: FormControl<string>;
  city: FormControl<string>;
  state: FormControl<string>;
  country: FormControl<string>;
}

export class Address {
  constructor(
    public line1: string,
    public zipCode: string,
    public city: string,
    public state: string,
    public country: string,
    public line2?: string | null
  ) {}

  isValid() {
    return (
      this.line1 && this.city && this.country && this.state && this.zipCode
    );
  }
}
