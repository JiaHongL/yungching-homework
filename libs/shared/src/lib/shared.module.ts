import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './ui/button/button.component';
import { PaginationComponent } from './ui/pagination/pagination.component';
import { TravelListComponent } from './ui/travel-list/travel-list.component';

import { TextInputComponent } from './ui/form/text-input/text-input.component';
import { SelectComponent } from './ui/form/select/select.component';


const formComponents = [
  TextInputComponent,
  SelectComponent,
];

@NgModule({
  declarations: [
    ...formComponents,
    ButtonComponent,
    PaginationComponent,
    TravelListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...formComponents,
    ButtonComponent,
    PaginationComponent,
    TravelListComponent
  ]
})
export class SharedModule { }
