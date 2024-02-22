import { Routes } from '@angular/router';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { DoggieContainerComponent } from './components/doggie-container/doggie-container.component';

export const routes: Routes = [
  { path: '', component: DoggieContainerComponent },
  { path: 'home', component: DoggieContainerComponent },
  { path: 'favourites', component: FavouritesComponent }
];
