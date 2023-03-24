import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReviewsListResponse } from 'src/app/interfaces/reviews.model';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() id:any;
  @Input() comments: any = []
  display: any;
  
  constructor(private db: DatabaseService) {};

  ngOnInit(): void {}


  update(){
    this.display = !this.display;
  }




}
