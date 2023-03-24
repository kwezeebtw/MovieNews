import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AuthorDetails, Review, ReviewsListResponse } from 'src/app/interfaces/reviews.model';
import { AuthService } from 'src/services/auth/auth.service';
import { DatabaseService } from 'src/services/database/database.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit{

  @Input() id:any;
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
      this.cd.detectChanges();
      const com: Review = {
        content: this.commentBody,
        created_at: new Date(),
        id:this.id,
        author_details: {
          username: this.displayName,
          avatar_path: this.photoURL
        },
      };
  
      this.db.addComment(com)
  }

  comValueChange(commBody: any){
    this.commentBody = commBody;
  }


}
