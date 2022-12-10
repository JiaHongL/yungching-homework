import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { Miscellaneous } from '../models/miscellaneous.model';
import { Attraction } from '../models/attraction.model';
import { Result } from './../models/result.model';

import { map, Observable, of } from 'rxjs';
import { SelectOption } from '../ui/form/select/select-option.models';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  favoriteMap = new Map<number, Attraction>();

  private api = environment.apiUrl + '/zh-tw/';

  constructor(private http: HttpClient) {}

  getAttractions(
    page = 1,
    categoryIds: number | string
  ): Observable<Result<Attraction>> {
    return this.http.get<Result<Attraction>>(this.api + 'Attractions/All', {
      params: {
        page,
        categoryIds,
      },
    });
  }

  getAttractionCategories(): Observable<SelectOption[]> {
    return this.http
      .get<Result<Miscellaneous>>(this.api + 'Miscellaneous/Categories', {
        params: {
          type: 'Attractions',
        },
      })
      .pipe(
        map((res) => res?.data?.Category),
        map((data) => {
          return (
            data?.map((v: { id: number; name: string }) => {
              return {
                text: v.name,
                value: v.id,
              } as SelectOption;
            }) || []
          );
        })
      );
  }

  getFavoritesObs$(): Observable<Attraction[]> {
    this.favoriteMap = new Map(
      JSON.parse(window.localStorage.getItem('favorites') as string)
    );

    return of([...this.favoriteMap.values()]);
  }

  addFavorites(data: Attraction[]): void {
    data.forEach((value) => {
      if (!this.favoriteMap.get(value.id)) {
        this.favoriteMap.set(value.id, value);
      }
    });

    window.localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(this.favoriteMap.entries()))
    );
  }

  removeFavorites(data: Attraction[]): void {
    data.forEach((value) => {
      this.favoriteMap.delete(value.id);
    });

    window.localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(this.favoriteMap.entries()))
    );
  }

  modifyFavorite(data: Attraction): void {
    this.favoriteMap.set(data.id, data);

    window.localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(this.favoriteMap.entries()))
    );
  }
}
