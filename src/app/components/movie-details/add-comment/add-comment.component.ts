import { ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from 'src/services/auth/auth.service';
import { DatabaseService } from 'src/services/database/database.service';
import { CommentDatabaseModel } from 'src/services/model/comment-database.model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {

  commentBody: string = ''
  disableCommentButton: boolean = false;

  constructor(public authService: AuthService, private cd: ChangeDetectorRef, private db: DatabaseService) {}

  addComment() {
    if(this.commentBody.length == 0 || this.commentBody == ''){
      alert("Veuillez saisir un commentaire");
    } else {
      this.disableCommentButton = true;
      this.cd.detectChanges();
      const com: CommentDatabaseModel = {
        userId: this.db.uid,
        commentBody: this.commentBody,
      };
      this.db.addComment(com)
    }
  }

  comValueChange(commBody: any){
    this.commentBody = commBody;
  }


}
