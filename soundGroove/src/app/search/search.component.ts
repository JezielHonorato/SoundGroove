import { Component } from '@angular/core';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  results: any = null;

  constructor(private spotifyService: SpotifyService) {}

  onSearch() {
    this.spotifyService.search(this.query).subscribe(data => {
      this.results = data;
    });
  }
}
