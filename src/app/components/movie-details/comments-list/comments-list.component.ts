import { Component, Input, OnInit } from '@angular/core';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input() id:any;
  comments: any = []
  getComments:Array<any> | undefined

  constructor(private db: DatabaseService) {};

  ngOnInit(): void {
    this.getAllCommentsFromMovie(this.id);
  }

  getAllCommentsFromMovie(id: number) {
    this.db.getAllCommentsFromMovieID(id).subscribe(response => {
      this.getComments = response;
      this.comments = this.getComments.map(value => value);
      console.log(this.comments)
    });
  }

}
