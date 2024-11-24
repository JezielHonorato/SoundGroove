import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private accessToken = 'BQAkgulxgMXHCZo-_K5g4jDlPJdzdmzgwa66GEoZNN6N8GDkAMMBOADshoKH9kylymJuhbuCP-73kcNI-RCLSdMHUfu5o0euUni_cG7ejLdVkTVhHp4';
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