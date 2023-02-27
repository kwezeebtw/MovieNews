import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';
import { ActivatedRoute , Params} from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  request: any = [];
  apiResponse: any;

  constructor(private authService: AuthService,  private router: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.createRequestToken();
  }

  createRequestToken() {
    this.authService.getRequestToken()
    .subscribe((response: any) => {
      this.request = response.request_token;
      console.log(this.request)
    });

    this.authService.createNewSession(this.request)
    .subscribe((response:any) => {
      this.apiResponse = response.results
    })

  }

  goToUrl(): void {
    this.document.location.href = `https://www.themoviedb.org/authenticate/${this.request}?redirect_to=http://localhost:4200`;

  }

  





}
