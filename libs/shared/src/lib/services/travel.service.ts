import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelService {

  favoriteMap = new Map();

  private api = environment.apiUrl + '/zh-tw/';

  constructor(private http: HttpClient) {}

  getAttractions(page = 1, categoryIds: number | string) {
    return this.http.get(this.api + 'Attractions/All', {
      params: {
        page,
        categoryIds,
      },
    });
  }

  getAttractionCategories() {
    return this.http
      .get<any>(this.api + 'Miscellaneous/Categories', {
        params: {
          type: 'Attractions',
        },
      })
      .pipe(
        map((res) => res?.data?.Category),
        map((data) =>
          data.map((v: { id: number; name: string }) => {
            return {
              value: v.id,
              text: v.name,
            };
          })
        )
      );
  }

  getFavoritesObs$(): Observable<any[]>  {

    this.favoriteMap = new Map(
      JSON.parse(window.localStorage.getItem('favorites') as string)
    );

    return of([...this.favoriteMap.values()])
  }

  addFavorites(data: any[]) {

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

  removeFavorites(data: any[]) {

    data.forEach((value) => {
      this.favoriteMap.delete(value.id);
    });

    window.localStorage.setItem(
      'favorites',
      JSON.stringify(Array.from(this.favoriteMap.entries()))
    );

  }

}
