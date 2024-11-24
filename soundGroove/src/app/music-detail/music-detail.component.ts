import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpotifyService } from '../spotify.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.css'],
  imports: [CommonModule, FormsModule]
})
export class MusicDetailComponent implements OnInit {
  @Input() trackId: string = '';
  track: any;
  rating: number = 0;
  review: string = '';

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    if (this.trackId) {
      this.spotifyService
        .getTrackDetails(this.trackId)
        .subscribe((response) => {
          this.track = response;
        });
    }
  }

  submitReview(): void {
    console.log('Review Submitted:', {
      trackName: this.track.name,
      rating: this.rating,
      review: this.review,
    });
  }
}
