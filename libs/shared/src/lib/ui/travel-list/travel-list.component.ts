import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss']
})
export class TravelListComponent {

  @Input() travelData:any[] =[];

}
