
import { Component, OnInit, Input } from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  @Input() moviesData: any = [];
  @Input() p: number = 1;
  @Input() total: number = 0;

  
  constructor(private dataService: MoviesDataService) {}

  ngOnInit(): void {
 
  }

  getPopularMovies() {
    this.dataService.getPopularMovies(this.p)
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