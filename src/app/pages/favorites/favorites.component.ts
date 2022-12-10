import { Component } from '@angular/core';

import { TravelService } from 'libs/shared/src/lib/services/travel.service';
import { BlockViewService } from 'libs/shared/src/lib/ui/block-view/block-view.service';
import { BehaviorSubject, mergeMap, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {

  selectedTravelList: any[] = [];

  update$ = new BehaviorSubject<any>('');

  data$: Observable<any[]> = this.update$.asObservable().pipe(
    mergeMap(() => this.travelService.getFavoritesObs$()),
    tap(() => (this.selectedTravelList = []))
  );

  constructor(
    private blockViewService: BlockViewService,
    public travelService: TravelService
  ) {}

  removeFavorites() {
    this.travelService.removeFavorites(this.selectedTravelList);
    alert('移除成功');
    this.update$.next('');
  }

}
