import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SelectOption } from 'libs/shared/src/lib/ui/form/select/select-option.models';

import { TravelService } from 'libs/shared/src/lib/services/travel.service';
import { BlockViewService } from 'libs/shared/src/lib/ui/block-view/block-view.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {


  currentPage = 1;

  total = 200;

  itemsPerPage = 10;

  options:SelectOption[] = [];

  form: FormGroup = this.fb.group({
    testInput: '123',
    categoryIds: 0,
  });

  constructor(
    private route: ActivatedRoute,
    private blockViewService:BlockViewService,
    private fb: FormBuilder,
    private travelService: TravelService
  ) {

    this.options = this.route.snapshot.data['categories'];

    this.form.get('categoryIds')?.setValue(
      this.options[0].value
    );

    this.travelService.getAttractions().subscribe({
      next: (res) => {
        console.log(res);
      },
    });

    this.blockViewService.show();

    setTimeout(() => {
      this.blockViewService.hide();
    },5000);

  }

  addFavorite() {
    console.log('add....');
  }

  selectChange(value: any) {
    console.log('value', value);
  }

  pageChange(page: number): void {
    console.log('pageChange', page);
  }
}
