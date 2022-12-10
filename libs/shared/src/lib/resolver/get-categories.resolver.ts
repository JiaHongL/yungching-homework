import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { TravelService } from '../services/travel.service';
import { BlockViewService } from '../ui/block-view/block-view.service';

@Injectable({
  providedIn: 'root',
})
export class GetCategoriesResolver
  implements
    Resolve<
      {
        id: number;
        text: string;
      }[]
    >
{
  constructor(
    private travelService: TravelService,
    private blockViewService: BlockViewService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<
    {
      id: number;
      text: string;
    }[]
  > {
    this.blockViewService.show();
    return this.travelService.getAttractionCategories();
  }
}
