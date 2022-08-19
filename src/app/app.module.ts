import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AddressFormComponent } from "./nested-form-group-child/address-form/address-form.component";
import { NestedFormGroupChildComponent } from "./nested-form-group-child/nested-form-group-child.component";
import { NestedFormGroupComponent } from "./nested-from-group/nested-from-group.component";
import { ReusableFormWrapperComponent } from "./reusable-form/reusable-form-wrapper/reusable-form-wrapper.component";
import { ReusableFormComponent } from "./reusable-form/reusable-form.component";
import { SimpleFormGroupComponent } from "./simple-form-group/simple-form-group.component";

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormGroupComponent,
    NestedFormGroupComponent,
    NestedFormGroupChildComponent,
    AddressFormComponent,
    ReusableFormComponent,
    ReusableFormWrapperComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
