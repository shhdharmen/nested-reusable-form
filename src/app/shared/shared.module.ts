import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddressFormComponent } from "./components/address-form/address-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AddressFormComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddressFormComponent],
})
export class SharedModule {}
