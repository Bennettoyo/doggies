import { Component } from '@angular/core';
import { FavouriteDogService } from '../../services/favourite-dog.service';
import { DogBreed } from '../../models/dog-breed.interface';
import { DoggieComponent } from '../doggie-container/doggie/doggie.component';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [DoggieComponent],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.scss'
})
export class FavouritesComponent {
  favouriteDogIds: number[] = [];
  dogBreeds: DogBreed[] = [];
  favouritedDogs: DogBreed[] = [];

  constructor() { }

  ngOnInit() {
    const doggiesJsonString = localStorage.getItem('dogData');
    const favouriteDogsJsonString = localStorage.getItem('favouriteDogs');
    if (doggiesJsonString && favouriteDogsJsonString) {
      this.favouriteDogIds = JSON.parse(favouriteDogsJsonString);
      this.dogBreeds = JSON.parse(doggiesJsonString);
      this.favouritedDogs = this.dogBreeds.filter(dog => this.favouriteDogIds.includes(dog.id));
      this.matchFavouriteDogs();
    }
  }

  matchFavouriteDogs() {
    if (this.favouriteDogIds) {
      this.dogBreeds.forEach(dog => {
        dog.isFavourite = this.favouriteDogIds.includes(dog.id);
      });
    }
  }
}
