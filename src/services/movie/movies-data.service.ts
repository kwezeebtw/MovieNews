import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReviewsListResponse, Review } from '../../app/interfaces/reviews.model';
import { Movie, MoviesListResponse } from '../../app/interfaces/movie.model';


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  baseUrl: string = 'https://api.themoviedb.org/3/movie';  
  apiKey: string = 'df928e772131a3cd9859c6dacd2504e5'

  constructor(private http: HttpClient) {}

  getPopularMovies(pageNumber: number): Observable<MoviesListResponse>{
    return this.http.get<MoviesListResponse>(`${this.baseUrl}/popular?api_key=df928e772131a3cd9859c6dacd2504e5&page=${pageNumber}&language=fr`);
  }

  getTopRatedMovies(pageNumber: number): Observable<MoviesListResponse>{
    return this.http.get<MoviesListResponse>(`${this.baseUrl}/top_rated?api_key=df928e772131a3cd9859c6dacd2504e5&page=${pageNumber}&language=fr`);
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


}
