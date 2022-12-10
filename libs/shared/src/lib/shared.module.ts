import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from '@angular/material/dialog';

import { ButtonComponent } from './ui/button/button.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { TravelListComponent } from './ui/travel-list/travel-list.component';

import { TextInputComponent } from './ui/form/text-input/text-input.component';
import { SelectComponent } from './ui/form/select/select.component';
import { EditTravelModalComponent } from './ui/travel-list/edit-travel-modal/edit-travel-modal.component';

const formComponents = [
  TextInputComponent,
  SelectComponent,
];

@NgModule({
  declarations: [
    ...formComponents,
    ButtonComponent,
    PaginationComponent,
    TravelListComponent,
    EditTravelModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  exports: [
    ...formComponents,
    ButtonComponent,
    PaginationComponent,
    TravelListComponent
  ]
})
export class SharedModule { }
