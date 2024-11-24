import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css'],
  imports: [CommonModule, FormsModule]
})
export class MusicSearchComponent {
  query: string = '';
  results: any[] = [];

  constructor(private spotifyService: SpotifyService) {}

  onSearch(): void {
    if (this.query) {
      this.spotifyService.search(this.query).subscribe((response) => {
        this.results = response['tracks'].items;
      });
    }
  }
  
  viewTrackDetails(trackId: string) {
    // Add logic to view track details, for example, navigate or show details
    console.log('Viewing details for track', trackId);
  }
}
