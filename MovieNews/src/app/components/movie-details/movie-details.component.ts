import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service'
import { ActivatedRoute , Params} from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { MinuteSecondsPipe } from 'src/app/pipe/MinutesSecondPipe';
import { AuthService } from 'src/services/auth/auth.service';
import { DatabaseService } from 'src/services/database/database.service';
import { MovieDatabaseModel } from 'src/services/model/movie-database.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit{
  closeResult = '';
  movie: any
  id: any
  video: any = [];
  similarMovies: any = [];
  responsiveOptions: any
  reviews: any = [];
  display: boolean = true;
  comments: any = []
  getCommentsFromDB:Array<any> | undefined
  safeURL: any;
  videoKey: any;
  images: any = [];
  commentBody: string = ''; 
  test: any = [];
  
  
  constructor(
    private dataService: MoviesDataService,  
    private router: ActivatedRoute, 
    private _sanitizer: DomSanitizer,
    public authService: AuthService,
    private databaseService: DatabaseService
    ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieById(this.id)
      this.getSimilarMovie(this.id);
      this.getVideo(this.id);
      this.getImagesByMovieId(this.id);

    })
    
    
  }

  getVideo(id: number) {
    this.dataService.getVideo(id)
    .subscribe((response: any) => {
      this.videoKey = 'https://www.youtube.com/embed/' + response.results[0].key + '?autoplay=1';
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoKey);
    })
  }

  getMovieById(id: number) {
    this.dataService.getMovie(id)
    .subscribe((response: any) => {
      this.movie = response;
    });
  }

  getSimilarMovie(id: number) {
    this.dataService.getSimilarMovies(id).subscribe((res: any) => {
      this.similarMovies = res.results;
    });
  }

  getReviewsFromAPI(id:number) {
    this.dataService.getReviews(id).subscribe((res:any) => {
      this.comments = res.results;
    })
  }

  getReviewsFromDB(id: number) {
    this.databaseService.getAllCommentsFromMovieID(id).subscribe(response => {
      this.comments =  response;
    });
  }

  getAllReviews(id:number, reviewsForDB: boolean) {
    if(reviewsForDB) {
      this.comments = this.getReviewsFromDB(id);
    } else {
      this.comments = this.getReviewsFromAPI(id);
    }
  }

  getImagesByMovieId(id:number) {
    this.dataService.getImages(id).subscribe((res:any) => {
      this.images = res.posters;
    })
  }
 

  addFavoriteMovie(movie: MovieDatabaseModel) {
    this.databaseService.addMovie(movie);
  }

 


}
