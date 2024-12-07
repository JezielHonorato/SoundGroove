import { Component } from '@angular/core';
import { ReviewService } from '../../services/review/review.service';

@Component({
  selector: 'app-detail',
  standalone: false,

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  private results: any[] = [];

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.getMusicReview("a")
  }

  getMusicReview(idTrack: string) {
    this.reviewService.getReviews(idTrack).subscribe((response) => {
      this.results = response;
    });
  }
}
