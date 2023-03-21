import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() id:any;

  constructor(private db: DatabaseService) {};


  ngOnInit(): void {
    this.getAllCommentsFromMovie(this.id);
  }

  getAllCommentsFromMovie(id: number) {
    console.log(id);
  }

}
