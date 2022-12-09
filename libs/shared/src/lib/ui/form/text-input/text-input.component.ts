import {
  Component,
  ElementRef,
  forwardRef,
  Injector,
  Type,
  ViewChild,
} from '@angular/core';

import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export const TEXT_INPUT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextInputComponent),
  multi: true,
};

@Component({
  selector: 'lib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [TEXT_INPUT_VALUE_ACCESSOR],
})
export class TextInputComponent implements  ControlValueAccessor {
  @ViewChild('myInput') myInput!: ElementRef;

  disabled = false;

  ngControl!: NgControl;

  onChange!: (value: any) => void;

  onTouched!: () => void;

  constructor(private inj: Injector) {}

  ngOnInit(): void {
    this.ngControl = this.inj.get<NgControl>(NgControl as Type<NgControl>);
  }

  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = this.ngControl?.control?.value;
  }

  writeValue(val: any): void {
    if (this.myInput) {
      this.myInput.nativeElement.value = val;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(value: string): void {
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
