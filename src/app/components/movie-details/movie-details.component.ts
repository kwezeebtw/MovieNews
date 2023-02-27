import { Component, OnInit } from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service'
import { ActivatedRoute , Params} from '@angular/router';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';
import { MinuteSecondsPipe } from 'src/app/pipe/MinutesSecondPipe';

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
  safeURL: any;
  videoKey: any;
  images: any = [];
  
  constructor(private dataService: MoviesDataService,  private router: ActivatedRoute, private modalService: NgbModal, private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getMovieById(this.id)
      this.getSimilarMovie(this.id);
      this.getReviews(this.id);
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

  getReviews(id:number) {
    this.dataService.getReviews(id).subscribe((res:any) => {
      this.reviews = res.results;
    })
  }

  getImagesByMovieId(id:number) {
    this.dataService.getImages(id).subscribe((res:any) => {
      this.images = res.posters;
    })
  }
  
  update(){
    this.display = !this.display;
  }



}
