import { Component } from '@angular/core';
import { DogBreed } from '../../models/dog-breed.interface';
import { ApiService } from '../../services/api.service';
import { DoggieComponent } from './doggie/doggie.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doggie-container',
  standalone: true,
  imports: [DoggieComponent, MatProgressSpinnerModule, CommonModule],
  templateUrl: './doggie-container.component.html',
  styleUrl: './doggie-container.component.scss'
})
export class DoggieContainerComponent {
  title = 'doggies';
  dogBreeds: DogBreed[] = [];
  favouriteDogIds: number[] = [];
  loading: boolean = true;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const storedJsonString = localStorage.getItem('dogData');
    const favouriteDogsJsonString = localStorage.getItem('favouriteDogs');
    if (favouriteDogsJsonString) {
      this.favouriteDogIds = JSON.parse(favouriteDogsJsonString);
    }

    if (!storedJsonString) {
      this.apiService.getBreeds().subscribe(
        data => {
          const jsonString = JSON.stringify(data);
          localStorage.setItem('dogData', jsonString);
          this.dogBreeds = data;
          this.loading = false;
          this.matchFavouriteDogs();
        },
        error => console.error('Error fetching dog breeds:', error)
      )
    } else {
      this.dogBreeds = JSON.parse(storedJsonString);
      this.loading = false;
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
