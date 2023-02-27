import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://api.themoviedb.org/3';  
  apiKey: string = 'df928e772131a3cd9859c6dacd2504e5'

  constructor(private http: HttpClient) {}

  getRequestToken() {
    return this.http.get(`${this.baseUrl}/authentication/token/new?api_key=${this.apiKey}&language=fr`);
  }

  createNewSession(token: string) {
    const body = { request_token: token};
    return this.http.post(`${this.baseUrl}/authentication/session/new?api_key=${this.apiKey}&language=fr`, body);
  }

}
