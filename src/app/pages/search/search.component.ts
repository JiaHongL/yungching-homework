import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TravelService } from 'libs/shared/src/lib/services/travel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  currentPage = 1;

  total = 200;

  itemsPerPage = 10;

  options = [
    {
      text: '選項一',
      value: 1,
    },
    {
      text: '選項二',
      value: 2,
    },
    {
      text: '選項三',
      value: 3,
    },
  ];

  form: FormGroup = this.fb.group({
    testInput: '123',
    select: 2,
  });

  constructor(private fb: FormBuilder, private travelService: TravelService) {
    setTimeout(() => {
      this.total = 200;
      this.itemsPerPage = 10;
      this.currentPage = 5;
    }, 4000);

    this.travelService.getAttractions().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    this.travelService.getAttractionCategories().subscribe({
      next: (res) => {
        console.log(res);
      },
    });
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
