import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private accessToken = 'YOUR_ACCESS_TOKEN'; // Substitua pelo token de acesso obtido
  private apiUrl = 'https://api.spotify.com/v1';

  constructor(private http: HttpClient) {}

  // Função para pesquisar artistas, álbuns e músicas
  search(query: string): Observable<any> {
    const url = `${this.apiUrl}/search?q=${query}&type=track,artist&limit=5`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);

    return this.http.get(url, { headers });
  }

  // Função para buscar detalhes de um artista
  getArtistDetails(artistId: string): Observable<any> {
    const url = `${this.apiUrl}/artists/${artistId}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);

    return this.http.get(url, { headers });
  }
}
