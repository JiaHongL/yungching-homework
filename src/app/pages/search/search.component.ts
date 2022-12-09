import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  form: FormGroup = this.fb.group({
    testInput:'123'
  })

  constructor(private fb: FormBuilder) {}

  addFavorite() {
    console.log('add....');
  }
}
