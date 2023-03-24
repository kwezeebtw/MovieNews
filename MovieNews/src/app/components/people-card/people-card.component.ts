import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})

export class peopleCardComponent{
  @Input() peo:any;

  getimage(profile_path: String){
    if(profile_path == null){
      return "../../assets/user.jpg";
    }else{
      return "https://image.tmdb.org/t/p/original/" + profile_path;
    }
  }

  getNom(nom :String){
    return nom.replace("(uncredited)", "")
  }
}