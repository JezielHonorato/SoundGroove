import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';

const routes: Routes = [
  { path: '', component: MusicSearchComponent},
  { path: 'detail', component: MusicDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
