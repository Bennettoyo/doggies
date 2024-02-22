import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DogBreed } from '../../../models/dog-breed.interface';
import { FavouriteDogService } from '../../../services/favourite-dog.service';

@Component({
  selector: 'app-doggie',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './doggie.component.html',
  styleUrl: './doggie.component.scss'
})
export class DoggieComponent {
  @Input() data: DogBreed[] = [];

  constructor(private favouriteDogService: FavouriteDogService) { }

  formatString(value: string): string {
    return value?.toLowerCase().replace(/,([^,]*)$/, ' and$1');
  }

  toLowerCase(value: string): string {
    return value.toLowerCase();
  }

  favourited(dogId: number, isFavoured: boolean) {
    let sound;
    if (isFavoured) {
      sound = new Audio("assets/dog_whine.wav");
    } else {
      sound = new Audio("assets/dog.wav");
    }
    sound.play();
    this.favouriteDogService.addFavouriteDog(dogId);
  }
}
