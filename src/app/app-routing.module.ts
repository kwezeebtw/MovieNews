import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
