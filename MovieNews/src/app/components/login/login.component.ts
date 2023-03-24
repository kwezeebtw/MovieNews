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
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,  private router: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {

  }

  login() {
    this.authService.login(this.email, this.password)
  }

  signInWithGoogle() {
    this.authService.oAuthLogin();
  }

  

  

  





}
