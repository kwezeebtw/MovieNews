import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})

export class FilterComponent implements OnInit {
 
  moviesData: any = [];
  p : number = 1;
  total: number = 0;

  adult: boolean = false;
  star: boolean = true;

  constructor(private dataService: MoviesDataService) {}

  ngOnInit(): void {
    this.getTopRatedMovies();
  }
  
  getMoviesList(event: any){
    if(this.star){
      if(!( event.target.value.length === 0 || this.total === 0)){
        this.dataService.getQuerry(event.target.value, this.adult)
        .subscribe((response: any)=> {
        this.moviesData = response;
        this.total = response.total_results;
        })
      }else{
        this.getTopRatedMovies();
      }
    }else{
      if(!( event.target.value.length === 0 || this.total === 0)){
        this.dataService.getLatest(this.adult, event.target.value)
        .subscribe((response: any)=> {
        this.moviesData = response;
        this.total = response.total_results;
        })
      }else{
        this.getToplastedMovies();
      }
    }
   
  }

  getToplastedMovies() {
    this.dataService.getLatest(this.adult, "a")
    .subscribe((response: any) => {
      this.moviesData = response;
      this.total = response.total_results;
    });
}

  getTopRatedMovies() {
      this.dataService.getTopRatedMovies(this.p, this.adult)
      .subscribe((response: any) => {
        this.moviesData = response;
        this.total = response.total_results;
      });
  }
  
  setwithAdult(){
    if(this.adult){
      document.getElementById("adult")?.setAttribute("src", "../../assets/family.png");
    }else{
      document.getElementById("adult")?.setAttribute("src", "../../assets/pegi18.png");
    }
    this.adult = !this.adult;
      
  }
  setTopFilm(){
    if(!this.star){
      document.getElementById("filter")?.setAttribute("src", "../../assets/etoile.png");
      this.getTopRatedMovies()
    }
    this.star = !this.star;
  }

  setTopRecently(){
    if(this.star){
      document.getElementById("filter")?.setAttribute("src", "../../assets/reveil.png");
      this.getToplastedMovies()
    }
    this.star = !this.star;
  }
}
  