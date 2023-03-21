import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movies/movie.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { PeopleComponent } from './components/people/people.component';
import { peopleCardComponent } from './components/people-card/people-card.component';
import { peopleDetailComponent } from './components/people-details/peopleDetail.component';

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
  },
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'peopleCard',
    component: peopleCardComponent
  },
  {
    path: 'peopleDetail/:id',
    component: peopleDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
