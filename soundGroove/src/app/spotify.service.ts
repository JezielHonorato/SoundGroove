import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private accessToken = 'BQB3F_TXgUoMq278HPkz4DWJDzYpukjQ3Y7W3SbEXKOrwGzJZZA2IlCqtzxakmhrooepvEVkZv3n7PykBqWJpU-TLw_nCV0-R04l2_1Rm8Nt17q84w8';
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}&type=track&limit=5`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.accessToken}`
    );
    return this.http.get(url, { headers });
  }

  getTrackDetails(trackId: string): Observable<any> {
    const url = `${this.apiUrl}/tracks/${trackId}`;
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.accessToken}`
    );
    return this.http.get(url, { headers });
  }
}