import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Movie } from 'src/app/interfaces/movie.model';
import { MovieDatabaseModel } from '../model/movie-database.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private favoriteMoviesCollection: AngularFirestoreCollection<Movie> | undefined;
  uid: any;

  constructor(private fireBaseAuth: AngularFireAuth, private db: AngularFirestore) {
    this.fireBaseAuth.authState.subscribe(auth => {
      auth ? this.uid = auth.uid : this.uid = null;
    });
  }


  addMovie(movie: MovieDatabaseModel) {
    const movieDetails = {
          userId: this.uid,
          movieId: movie.id,
          date: new Date(),
          original_title: movie.original_title,
          overview: movie.overview,
          vote_average: movie.vote_average,
          popularity: movie.popularity,
          release_date: movie.release_date,
          poster_path: movie.poster_path,
          watched: false
        };

    return this.db.collection('favoriteMovies').doc(movie.original_title)
      .set(movieDetails, {merge: true})
      
  }

  getAllFavoriteMovies() {
    return this.db.collection('favoriteMovies', ref => ref
      .where('userId', '==', this.uid)
    ).valueChanges();
  }

  deleteFavoriteMovie(id: number) {
    return this.db.doc(`'favoriteMovies'/${id}`)
    .delete()
  }


}
