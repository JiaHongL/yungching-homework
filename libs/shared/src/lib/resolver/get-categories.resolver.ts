import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { TravelService } from '../services/travel.service';
import { BlockViewService } from '../ui/block-view/block-view.service';

import { SelectOption } from '../ui/form/select/select-option.models';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetCategoriesResolver implements Resolve<SelectOption[]> {
  constructor(
    private travelService: TravelService,
    private blockViewService: BlockViewService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<SelectOption[]> {
    this.blockViewService.show();
    return this.travelService.getAttractionCategories();
  }

}
