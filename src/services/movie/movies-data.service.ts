import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  baseUrl: string = 'https://api.themoviedb.org/3/movie';  
  apiKey: string = 'df928e772131a3cd9859c6dacd2504e5'

  constructor(private http: HttpClient) {}

  getPopularMovies(pageNumber: number) {
    return this.http.get(`${this.baseUrl}/popular?api_key=df928e772131a3cd9859c6dacd2504e5&page=${pageNumber}&language=fr`);
  }

  getTopRatedMovies(pageNumber: number) {
    return this.http.get(`${this.baseUrl}/top_rated?api_key=df928e772131a3cd9859c6dacd2504e5&page=${pageNumber}&language=fr`);
  }

  getMovie(id: number) {
    return this.http.get(`${this.baseUrl}/${id}?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }

  getMoviesByGenre(id: number) {
    return this.http.get(`${this.baseUrl}/genre/${id}/movies?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }

  getSimilarMovies(id: number) {
    return this.http.get(`${this.baseUrl}/${id}/similar?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }

  getReviews(id: number) {
    return this.http.get(`${this.baseUrl}/${id}/reviews?api_key=df928e772131a3cd9859c6dacd2504e5&language=fr`);
  }


}
