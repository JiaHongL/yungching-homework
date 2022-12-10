import { finalize, startWith } from 'rxjs/operators';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  selectedTravelList: any[] = [];

  travelData: any[] = [];

  currentPage = 1;

  total = 0;

  itemsPerPage = 10;

  options: SelectOption[] = [];

  categoryIdFormControl: FormControl<number | string> = new FormControl('', {
    nonNullable: true,
  });

  constructor(
    private route: ActivatedRoute,
    private blockViewService: BlockViewService,
    private travelService: TravelService
  ) {

    this.options = this.route.snapshot.data['categories'];

    this.categoryIdFormControl?.valueChanges
      .pipe(startWith(null))
      .subscribe(() => {
        this.currentPage = 1;
        this.search();
      });

  }

  search(): void {

    this.blockViewService.show();
    this.travelData = [];

    this.travelService
      .getAttractions(this.currentPage, this.categoryIdFormControl.value)
      .pipe(finalize(() => this.blockViewService.hide()))
      .subscribe({
        next: (res: any) => {
          this.total = res.total;
          this.travelData = res.data;
        },
      });

  }

  addFavorite() {

    if(!this.selectedTravelList.length) return;

    this.travelService.addFavorites(this.selectedTravelList);

    alert('新增成功');

    this.selectedTravelList = [];

  }

  pageChange(): void {
    this.search();
  }
}
