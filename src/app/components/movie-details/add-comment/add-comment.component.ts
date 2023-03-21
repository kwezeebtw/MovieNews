import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';
import { DatabaseService } from 'src/services/database/database.service';
import { CommentDatabaseModel } from 'src/services/model/comment-database.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{

  @Input() movieId: string = "";
  commentBody: string = ''
  disableCommentButton: boolean = false;
  displayName: any;
  photoURL: any;


  constructor(public authService: AuthService, private cd: ChangeDetectorRef, private db: DatabaseService) {}

  ngOnInit(): void {
    this.authService.readUser().subscribe(authData => {
      if (authData) {
        this.displayName = authData.displayName;
        this.photoURL = authData.photoURL;
      }
    });
  }
 

  addComment() {
    if(this.commentBody.length == 0 || this.commentBody == ''){
      alert("Veuillez saisir un commentaire");
    } else {
      this.disableCommentButton = true;
      this.cd.detectChanges();

      const com: CommentDatabaseModel = {
        username: this.displayName,
        userPicture: this.photoURL,
        userId: this.db.uid,
        movieId: this.movieId,
        commentBody: this.commentBody,
      };
      this.db.addComment(com)
    }
  }

  comValueChange(commBody: any){
    this.commentBody = commBody;
  }


}
