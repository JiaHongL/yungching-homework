import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private api = environment.apiUrl + '/zh-tw/';

  constructor(private http: HttpClient) {}

  getAttractions(page = 1, categoryIds: number) {
    return this.http.get<any>(this.api + 'Attractions/All', {
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

  addFavorites(){
    // do something...
  }

  removeFavorites(){
    // do something...
  }

}
