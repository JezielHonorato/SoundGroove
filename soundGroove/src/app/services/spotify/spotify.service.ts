import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';
  private baseUrl = 'https://seu-backend.com/api'; // URL do backend

  constructor(private http: HttpClient) {}

  getToken() {
    const clientId = 'c0ca3712fa5f4a5f8a64b07809d87947';
    const clientSecret = 'd06d29fb26724534be196b78c8ddd55d';
    const auth = `Basic ${btoa(`${clientId}:${clientSecret}`)}`;

    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.access_token;
        console.log(accessToken);
      })
      .catch((error) => console.error('Erro ao obter o token:', error));
  }

  search(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}&type=track&limit=5`;
    const headers = new HttpHeaders().set('Authorization', `Bearer BQCvjR3GCIRzh-sEvhOWLbJ9qMXiEY_2kxc9zLePwDB95JRH10bsGMEN3KFCDKcqZY1uSRsWYrvFTULFih925lquJrDDJHutffJITyFn7t1cXwWnRH0`);
    return this.http.get(url, { headers });
  }

  getTrackDetails(trackId: string): Observable<any> {
    const url = `${this.apiUrl}/tracks/${trackId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer BQCvjR3GCIRzh-sEvhOWLbJ9qMXiEY_2kxc9zLePwDB95JRH10bsGMEN3KFCDKcqZY1uSRsWYrvFTULFih925lquJrDDJHutffJITyFn7t1cXwWnRH03`);
    return this.http.get(url, { headers });
  }

  submitReview(review: { trackId: string, rating: number, comment: string}) {
    return this.http.post(`${this.baseUrl}/reviews`, review);
  }
}