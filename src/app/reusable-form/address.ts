// src/app/reusable-form/address.ts

export class Address {
  constructor(
    public line1: string = "",
    public zipCode: string = "",
    public city: string = "",
    public state: string = "",
    public country: string = "",
    public line2?: string | null
  ) {}

  isValid() {
    return (
      this.line1 && this.city && this.country && this.state && this.zipCode
    );
  }
}
