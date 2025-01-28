import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'sHf2HcKm4IZ8Z9G8dYY7FsjrLRy3PEWIya9XVrCP';


  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}`);
  }
  getImagesByDate(date: any): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&date=${date}`);

  }
}