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
import { DataViewModule } from 'primeng/dataview'
import { FormsModule } from "@angular/forms";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AvatarModule } from 'primeng/avatar';


import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { MinuteSecondsPipe } from './pipe/MinutesSecondPipe';
import { GalleriaModule } from 'primeng/galleria';
import { GallerieImgComponent } from './components/movie-details/gallerie-img/gallerie-img.component';
import { TrailerModalComponent } from './components/movie-details/trailer-modal/trailer-modal.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment.development';
import { AccountComponent } from './components/account/account.component';
import { TabViewModule } from 'primeng/tabview';
import { PeopleComponent } from './components/people/people.component';
import { peopleDetailComponent } from './components/people-details/peopleDetail.component';
import { peopleCardComponent } from './components/people-card/people-card.component';

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
    AccountComponent,
    MinuteSecondsPipe,
    HomeComponent,
    GallerieImgComponent,
    TrailerModalComponent,
    PeopleComponent,
    peopleDetailComponent,
    peopleCardComponent,
  ],
  imports: [
    AppRoutingModule,
    GalleriaModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    DataViewModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgxPaginationModule,
    AngularFirestoreModule,
    AvatarModule,
    ButtonModule,
    TabViewModule,
    BrowserAnimationsModule,
    ImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
