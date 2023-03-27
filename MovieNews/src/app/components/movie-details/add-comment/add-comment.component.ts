import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { auth } from 'firebase';
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
  notPhotoURl:any;
  email: any;
  notDisplayName:any;
  user_id: string;


  constructor(public authService: AuthService, private cd: ChangeDetectorRef, private db: DatabaseService) {}

  ngOnInit(): void {
    this.authService.readUser().subscribe(authData => {
      if (authData) {
        this.displayName = authData.displayName;
        this.notDisplayName = authData.email;
        this.photoURL = authData.photoURL;
        this.notPhotoURl = 'assets/user.jpg'
        this.user_id = authData.uid;
      }
    });
  }
 
  addComment() {
      this.cd.detectChanges();
      const com: Review = {
        content: this.commentBody,
        created_at: new Date().toLocaleDateString(),
        id:this.id,
        author_details: {
          username: this.checkUserName(this.displayName),
          avatar_path: this.photoURL != null ? this.photoURL : this.notPhotoURl,
          user_id: this.user_id,
        },
      };
  
      this.db.addComment(com)
  }

  checkUserName(str: string): string {
      if(this.displayName == null) {
        return this.notDisplayName.substring(0, this.notDisplayName.indexOf('@'));
      } else {
        return this.displayName;
      }

  }

  comValueChange(commBody: any){
    this.commentBody = commBody;
  }


}
