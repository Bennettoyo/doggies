import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteDogService {
  public favouriteDogIds: number[] = [];

  addFavouriteDog(dogId: number) {
    const favouriteDogsJsonString = localStorage.getItem('favouriteDogs');
    if(favouriteDogsJsonString) {
      this.favouriteDogIds = JSON.parse(favouriteDogsJsonString);
    }
    if (!this.favouriteDogIds.includes(dogId)) {
      this.favouriteDogIds.push(dogId);
      const jsonString = JSON.stringify(this.favouriteDogIds);
      localStorage.setItem('favouriteDogs', jsonString);
    } else {
      this.favouriteDogIds = this.favouriteDogIds.filter(id => id !== dogId);
      const jsonString = JSON.stringify(this.favouriteDogIds);
      localStorage.setItem('favouriteDogs', jsonString);
    }
  }
}
