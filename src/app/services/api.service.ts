import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DogBreed } from '../models/dog-breed.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = 'live_Jk26yTFePPEgsT0hTpvVPM5Godh4FMsu8LQEHHInLHZJ2wNgP4E9yzsudV7ph76V';
  private apiUrl = 'https://api.thedogapi.com/v1';

  constructor(private http: HttpClient) { }

  getBreeds(): Observable<DogBreed[]> {
    const headers = new HttpHeaders({
      'x-api-key' : this.apiKey
    });

    return this.http.get<any>(`${this.apiUrl}/breeds`, { headers });
  }
}
