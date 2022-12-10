import { Component } from '@angular/core';

import { TravelService } from 'libs/shared/src/lib/services/travel.service';

import { Attraction } from 'libs/shared/src/lib/models/attraction.model';

import { BehaviorSubject, mergeMap, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  selectedTravelList: Attraction[] = [];

  update$ = new BehaviorSubject<string>('');

  data$: Observable<Attraction[]> = this.update$.asObservable().pipe(
    mergeMap(() => this.travelService.getFavoritesObs$()),
    tap(() => (this.selectedTravelList = []))
  );

  constructor(
    public travelService: TravelService
  ) {}

  removeFavorites():void {
    if (this.selectedTravelList.length) {
      return;
    }
    this.travelService.removeFavorites(this.selectedTravelList);
    alert('移除成功');
    this.update$.next('');
  }

  editTrave(data: Attraction):void {
    this.travelService.modifyFavorite(data);
    alert('修改成功');
    this.update$.next('');
  }
}
