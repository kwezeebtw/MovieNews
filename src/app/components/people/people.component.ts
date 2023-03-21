import { Component, OnInit, Input } from '@angular/core';
import { MoviesDataService } from '../../../services/movie/movies-data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {
  @Input() id: any;
  people: any;
  image: any;
  total: any;
  constructor( private dataService: MoviesDataService) {}

  ngOnInit(): void {
    this.getPeopleById(this.id);  
  }

  getPeopleById(idmoovie: number){
    this.dataService.getPerson(idmoovie)
    .subscribe((response: any) => {
      this.people = response.cast;
      this.total = response.getTotal;
    });
  }

  getAuteurs(){
   if( this.people.length > 0){
      return "Acteurs (" + this.people.length + ")"
    }else{
      return "Acteur"
    }
  }


}