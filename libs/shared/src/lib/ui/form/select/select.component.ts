import { Component, ElementRef, EventEmitter, forwardRef, Injector, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOption } from './select-option.models';

export const SELECT_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectComponent),
  multi: true,
};

@Component({
  selector: 'lib-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [SELECT_VALUE_ACCESSOR],
})
export class SelectComponent implements ControlValueAccessor {

  ngControl!: NgControl;

  control: FormControl = new FormControl();

  @ViewChild('select', { static: true })
  selectElement!: ElementRef;

  @Input() options: SelectOption[] = [];

  @Output() selectChange = new EventEmitter<string>();

  constructor(private inj: Injector) {}

  onChange!: (value: any) => void;

  onTouched!: () => void;

  ngOnInit(): void {

    this.ngControl = this.inj.get<NgControl>(NgControl);

    if (this.control.disabled) {
      setTimeout(() => {
        this.ngControl.control!.disable();
      });
    }

  }

  selectOnChange(selectedValue: string | undefined): void {
    this.onChange(selectedValue);
    this.selectChange.emit(selectedValue);
  }

  writeValue(value: any): void {
    this.control.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {

    if (
      this.control.disabled === isDisabled ||
      this.control.enabled === !isDisabled
    ) {
      return;
    }

    const action = isDisabled ? 'disable' : 'enable';

    this.control[action]();

  }

  getSelected(option: any): boolean {
    if (option.value === this.control.value) {
      return true;
    }
    return false;
  }

}
