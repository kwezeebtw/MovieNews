import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../services/movies-data.service';
import { ActivatedRoute , Params} from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  movie: any
  id: any
  similarMovies: any = [];
  responsiveOptions: any
  reviews: any = [];
  
  constructor(private dataService: MoviesDataService,  private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieById(this.id)
      this.getSimilarMovie(this.id);
      this.getReviews(this.id);
    })

  }

  getMovieById(id: number) {
    this.dataService.getMovie(id)
    .subscribe((response: any) => {
      this.movie = response;
    });
    console.log(this.movie)
  }

  getSimilarMovie(id: number) {
    this.dataService.getSimilarMovies(id).subscribe((res: any) => {
      this.similarMovies = res.results;
    });
  }

  getReviews(id:number) {
    this.dataService.getReviews(id).subscribe((res:any) => {
      this.reviews = res.results;
    })
  }


}
