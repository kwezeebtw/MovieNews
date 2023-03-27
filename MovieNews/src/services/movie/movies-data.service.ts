import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReviewsListResponse, Review } from '../../app/interfaces/reviews.model';
import { Movie, MoviesListResponse } from '../../app/interfaces/movie.model';
import { People, PeopleListResponse} from '../../app/interfaces/people.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {
  getFavoriteMovie() {
    throw new Error('Method not implemented.');
  }

  baseUrlSearch: string = 'https://api.themoviedb.org/3/search';
  baseUrl: string = 'https://api.themoviedb.org/3/movie';  
  baseUrlPeople: string ='https://api.themoviedb.org/3/person/';
  apiKey: string = 'df928e772131a3cd9859c6dacd2504e5'

  constructor(private http: HttpClient) {}

  getPopularMovies(pageNumber: number): Observable<MoviesListResponse>{
    return this.http.get<MoviesListResponse>(`${this.baseUrl}/popular?api_key=df928e772131a3cd9859c6dacd2504e5&page=${pageNumber}&language=fr`);
  }
  
  getTopRatedMovies(pageNumber: number, bool: Boolean, ): Observable<MoviesListResponse>{
    return this.http.get<MoviesListResponse>(`${this.baseUrl}/top_rated?api_key=df928e772131a3cd9859c6dacd2504e5&page=${pageNumber}&language=fr&include_adult=${bool}`);
  }
  
  getLatest(bool: Boolean, query: String): Observable<MoviesListResponse>{
    return this.http.get<MoviesListResponse>(`${this.baseUrlSearch}/movie?api_key=df928e772131a3cd9859c6dacd2504e5&query=${query}&language=fr&include_adult=${bool}&year=${new Date().getFullYear()}}`);
  }

  getMovie(id: number): Observable<Movie>{
    return this.http.get<Movie>(`${this.baseUrl}/${id}?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }

  getSimilarMovies(id: number): Observable<MoviesListResponse> {
    return this.http.get<MoviesListResponse>(`${this.baseUrl}/${id}/similar?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }
  
  getMoviesByGenre(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/genre/${id}/movies?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }

  getReviews(id: number): Observable<ReviewsListResponse> {
    return this.http.get<ReviewsListResponse>(`${this.baseUrl}/${id}/reviews?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }

  getVideo(id:number): any {
    return this.http.get<any>(`${this.baseUrl}/${id}/videos?api_key=df928e772131a3cd9859c6dacd2504e5&language=en-US`)
  }

  getImages(id:number): any {
    return this.http.get<any>(`${this.baseUrl}/${id}/images?api_key=df928e772131a3cd9859c6dacd2504e5&language=en-US&include_image_language=fr`)
  }

  getQuerry(query: String, bool: Boolean): Observable<MoviesListResponse>{
    return this.http.get<MoviesListResponse>(`${this.baseUrlSearch}/movie?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr&query=${query}&include_adult=${bool}`)
  }

  getPerson(id:number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}/credits?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`)
  }

  getPeopleById(id:number): Observable<any> {
    return this.http.get<any>(`${this.baseUrlPeople}/${id}?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }
  /*
  getPeopleMovies(query: String): Observable<any>{
    //https://api.themoviedb.org/3/search/person?api_key=df928e772131a3cd9859c6dacd2504e5&language=en-US&query=mor&page=1&include_adult=false
    return this.http.get<any>('https://api.themoviedb.org/3/search/person?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr&query=morgan&page=1&include_adult=false');
  }
*/
}