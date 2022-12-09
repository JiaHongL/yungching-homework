import { finalize, startWith } from 'rxjs/operators';
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

  travelData: any[] = [];

  currentPage = 1;

  total = 0;

  itemsPerPage = 10;

  options: SelectOption[] = [];

  form: FormGroup = this.fb.group({
    testInput: '123',
    categoryIds: null,
  });

  constructor(
    private route: ActivatedRoute,
    private blockViewService: BlockViewService,
    private fb: FormBuilder,
    private travelService: TravelService
  ) {

    this.options = this.route.snapshot.data['categories'];

    this.form
      .get('categoryIds')
      ?.valueChanges
      .pipe(
        startWith(null)
      )
      .subscribe(() => {
        this.currentPage =1;
        this.search();
      });
  }

  search():void{
    this.blockViewService.show();
    this.travelData = [];
    this.travelService
      .getAttractions(this.currentPage, this.form.get('categoryIds')?.value)
      .pipe(finalize(() => this.blockViewService.hide()))
      .subscribe({
        next: (res) => {
          this.total = res.total;
          this.travelData = res.data;
        },
      });
  }

  addFavorite() {
    console.log('add....');
  }

  selectChange(value: any) {
    console.log('value', value);
  }

  pageChange(): void {
    this.search();
  }
}
