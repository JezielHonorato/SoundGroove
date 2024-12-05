import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { AppComponent } from './app.component';
import { SpotifyService } from './spotify.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MusicSearchComponent,
    MusicDetailComponent,
    AppComponent,
    AppRoutingModule
  ],
  providers: [SpotifyService, provideHttpClient()],
  bootstrap: []
  
})  
export class AppModule {}
