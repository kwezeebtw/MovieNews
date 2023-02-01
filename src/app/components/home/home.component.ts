import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
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

}
