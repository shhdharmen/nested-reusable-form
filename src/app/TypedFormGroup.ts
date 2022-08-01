import { AbstractControl, FormGroup } from "@angular/forms";

/**
 * This is a strongly typed thin wrapper type around `FormGroup`.
 * Can be created using the `typedFormGroup` function
 */

export interface TypedFormGroup<K> extends FormGroup {}
