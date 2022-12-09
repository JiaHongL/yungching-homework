import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetCategoriesResolver } from 'libs/shared/src/lib/resolver/get-categories.resolver';

import { LayoutComponent } from './layout/layout.component';

import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent,
        resolve: {
          categories: GetCategoriesResolver,
        }
      },
      { path: 'favorites', component: FavoritesComponent },
    ],
  },
  { path: '**', redirectTo: 'search', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
