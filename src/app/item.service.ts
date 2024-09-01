import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://api.publicapis.org/entries'; // Example public API

  constructor(private http: HttpClient) { }

  // Fetch items from the API
  getItems(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
