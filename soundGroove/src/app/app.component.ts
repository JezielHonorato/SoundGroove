import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, MusicSearchComponent, MusicDetailComponent],
})
export class AppComponent {
  //selectedTrack: any;
  title = 'SoundGroove';
/*
  selectTrack(track: any): void {
    this.selectedTrack = track;
  }*/
}
