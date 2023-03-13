import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService,  private router: ActivatedRoute) {}

  ngOnInit(): void {

  }

  register() {
    this.authService.register(this.email, this.password)
  }


  
}
