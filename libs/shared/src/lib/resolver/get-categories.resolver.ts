import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';

import { TravelService } from '../services/travel.service';

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
  constructor(private travelService: TravelService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<
    {
      id: number;
      text: string;
    }[]
  > {
    return this.travelService.getAttractionCategories();
  }
}
