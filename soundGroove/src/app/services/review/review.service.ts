import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private jsonURL = '/detail';

  constructor(private http: HttpClient) {}

  getReviews(idTrack: string) {
    return this.http.get<any[]>(`${this.jsonURL}/${idTrack}`);
  }
}
