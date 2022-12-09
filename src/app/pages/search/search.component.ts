import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {

  options = [{
    text:'選項一',
    value:1
  },{
    text:'選項二',
    value:2
  },{
    text:'選項三',
    value:3
  }]

  form: FormGroup = this.fb.group({
    testInput:'123',
    select:2
  })

  constructor(private fb: FormBuilder) {}

  addFavorite() {
    console.log('add....');
  }

  selectChange(value:any){
    console.log('value',value);
  }

}
