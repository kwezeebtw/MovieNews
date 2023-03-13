import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movies/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path:'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'movies',
    component: MovieComponent
  },
  {
    path:'movie/:id',
    component: MovieDetailsComponent
  },
  {
    path:'login',
    component:LoginComponent
  }, 
  {
    path:'register',
    component: RegisterComponent
  }, 
  {
    path:'account',
    component: AccountComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
