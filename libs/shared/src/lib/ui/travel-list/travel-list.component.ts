import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { Dialog } from '@angular/cdk/dialog';

import { EditTravelModalComponent } from './edit-travel-modal/edit-travel-modal.component';

import { Attraction } from '../../models/attraction.model';

import { filter } from 'rxjs';

@Component({
  selector: 'lib-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
})
export class TravelListComponent {
  @Input() showEditBtn = false;

  private _selectedTravelList: Attraction[] = [];

  @Input() set selectedTravelList(value: Attraction[]) {
    this._selectedTravelList = value;
    this.checkSelected();
  }

  get selectedTravelList(): Attraction[] {
    return this._selectedTravelList;
  }

  @Output() protected selectedTravelListChange = new EventEmitter<
    Attraction[]
  >();

  protected travelFormGroup = new FormGroup({
    selectedList: this.initFormArray(),
  });

  private _travelData: Attraction[] = [];

  @Input() set travelData(value: Attraction[]) {
    this._travelData = value;
    this.checkSelected();
  }

  get travelData(): Attraction[] {
    return this._travelData;
  }

  @Output() protected editTrave = new EventEmitter<Attraction>();

  constructor(private fb: FormBuilder, public dialog: Dialog) {}

  protected initFormArray() {
    const selectedListFormArray: FormArray<FormControl<boolean | unknown>> =
      this.fb.array([]);

    Array(30)
      .fill('')
      .forEach(() => {
        selectedListFormArray.push(this.fb.nonNullable.control(false));
      });

    return selectedListFormArray;
  }

  protected checkSelected(): void {
    const selectedListFormArray = this.travelFormGroup.get(
      'selectedList'
    ) as FormArray;

    selectedListFormArray.reset();

    this._travelData.forEach((data, index) => {
      const isSelected = this.selectedTravelList.find(
        (v: any) => data.id === v.id
      )
        ? true
        : false;

      if (isSelected) {
        selectedListFormArray.at(index).setValue(true);
      }
    });
  }

  protected selectChange(event: Event, data: Attraction): void {
    const isChecked = (<HTMLInputElement>event.target).checked;

    if (isChecked) {
      this._selectedTravelList.push(data);
    } else {
      this._selectedTravelList = this.selectedTravelList.filter(
        (v) => v.id !== data.id
      );
    }

    this.selectedTravelListChange.emit(this._selectedTravelList);
  }

  edit(item: Attraction): void {
    const dialogRef = this.dialog.open(EditTravelModalComponent, {
      data: {
        item,
      },
    });

    dialogRef.closed.pipe(filter((v) => !!v)).subscribe({
      next: (formData:any) => {
        const newData = {
          ...item,
          ...formData,
        };
        this.editTrave.emit(newData);
      },
    });
  }

}
