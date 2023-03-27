import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
import * as dayjs from 'dayjs';
import { DatabaseService } from 'src/services/database/database.service';
import { MovieDatabaseModel } from 'src/services/model/movie-database.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent {
  displayName: any;
  email: any ;
  photoURL: any;
  notPhotoURL: any;
  creationTime: any;
  favoriteMovies: any = []
  getFavoriteMovies:Array<any> | undefined
  sortField: any;
  sortOrder: any;
  isWatched: boolean = false;
  filmWatchedStatus: string = 'Film non vu';
  sortOptions: any = [];
  comments: any = [];
  user_id:any;

  constructor(private authService: AuthService, private router: Router, private db: DatabaseService) { }

  ngOnInit() {
    this.authService.readUser().subscribe(authData => {
      if (authData) {
        this.displayName = authData.displayName;
        this.email = authData.email;
        this.photoURL = authData.photoURL;
        this.notPhotoURL = 'assets/user.jpg';
        this.creationTime = dayjs(authData.metadata.creationTime).format('YYYY-MM-D HH:mm:ss');
        this.user_id = authData.uid;
        this.showFavoriteMovies()
      }
      this.sortOptions = [
        {label: 'Film vu', value: 'watched'},
        {label: 'Film non vu', value: '!watched'},
      ];
      });
  }

  showFavoriteMovies() {
    this.db.getAllFavoriteMovies().subscribe(response => {
      this.getFavoriteMovies = response;
      this.favoriteMovies = this.getFavoriteMovies.map(value => value);
    });
  }

  deleteFavoriteMovie(movie: MovieDatabaseModel) {
    this.db.deleteFavoriteMovieByID(movie);
  }

  filmWatched(movie: MovieDatabaseModel) {
    if(movie.watched) {
      movie.watched = false;
    } else {
      movie.watched = true;
    }
     this.db.updateWatchedFilm(movie);
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf("!") === 0) {
      this.sortOrder = 1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = -1;
    }
  }

 
  
  

  
}
