import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  photoURL: any;
  notPhotoUrl: any;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.readUser().subscribe(authData => {
      if (authData) {
        this.photoURL = authData.photoURL;
        this.notPhotoUrl = authData.email?.slice(0,1).toUpperCase()
      }
    });
  }

  loggedIn() {
    return localStorage.getItem('token')
  }

  onLogout() {
    localStorage.removeItem('token')
    this.authService.signOut();
  }
}
