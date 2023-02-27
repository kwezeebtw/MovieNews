import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service'


@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  moviesData: any = [];
  p: number = 1;
  total: number = 0;

  constructor(private dataService: MoviesDataService) {}

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  getPopularMovies() {
    this.dataService.getPopularMovies(this.p)
    .subscribe((response: any) => {
      this.moviesData = response;
      this.total = response.total_results;
    });
  }

  getTopRatedMovies() {
    this.dataService.getTopRatedMovies(this.p)
    .subscribe((response: any) => {
      this.moviesData = response;
      this.total = response.total_results;
    });
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.getPopularMovies();
  }

  getMoviesList(event: any){
    if(!( event.target.value.length === 0 || this.total === 0)){
      this.dataService.getQuerry(event.target.value)
      .subscribe((response: any)=> {
      this.moviesData = response;
      this.total = response.total_results;
      })
    }else{
      this.getTopRatedMovies();
    }
  }


}
