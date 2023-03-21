import { Component, OnInit} from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service';
import { ActivatedRoute , Params} from '@angular/router';


@Component({
  selector: 'app-people-detail',
  templateUrl: './peopleDetail.component.html',
  styleUrls: ['./peopleDetail.component.css']
})

export class peopleDetailComponent implements OnInit{
  peoId: any;
  peo: any;
  nameActing: any;
  movies: any = [];
  genre: any;
  constructor(private router: ActivatedRoute, private dataService: MoviesDataService) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.peoId = params['id'];
      this.peo = this.getPeopleById(this.peoId);
    });
    
  }
  getPeopleById(id: number) {
    this.dataService.getPeopleById(id)
    .subscribe((response: any) => {
      this.peo = response;
    });
  }

  getGender(id: number){
    this.genre = id;
    if(id == 2){
      return "Homme"
    }else{
        if(id == 1){
          return "Femme"
        }else{
          return "Autre"
        }
    }
  }

  getDescription(nom: string){
    if(nom == ""){
      return "Pas d'autres informations sur cette acteur";
    }
    return nom;
  }

  getProfession(text: any){
    if(text == "Acting"){
      if(this.getGender(this.genre) == "Femme"){
        return "Actrice";
      }
      return "Acteur";
    }
    return text;
  }

  getimage(profile_path: String){
    if(profile_path == null){
      return "../../assets/user.jpg";
    }else{
      return "https://image.tmdb.org/t/p/original/" + profile_path;
    }
  }
}
