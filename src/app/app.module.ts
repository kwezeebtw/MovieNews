import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieComponent } from './components/movies/movie.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule} from 'ngx-pagination';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './home/home.component';
import { MinuteSecondsPipe } from './pipe/MinutesSecondPipe';
import { GalleriaModule } from 'primeng/galleria';
import { GallerieImgComponent } from './components/movie-details/gallerie-img/gallerie-img.component';
import { TrailerModalComponent } from './components/movie-details/trailer-modal/trailer-modal.component';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MovieComponent,
    MovieDetailsComponent,
    LoginComponent,
    RegisterComponent,
    MovieCardComponent,
    MinuteSecondsPipe,
    HomeComponent,
    GallerieImgComponent,
    TrailerModalComponent,
  ],
  imports: [
    AppRoutingModule,
    GalleriaModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    NgxPaginationModule,
    ButtonModule,
    BrowserAnimationsModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
