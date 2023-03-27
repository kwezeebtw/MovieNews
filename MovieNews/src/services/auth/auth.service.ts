import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { map, switchMap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';

interface User {
  uid: any;
  email: any;
  displayName?: any;
  photoURL?: any;
  pseudo?: any;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

 
  redirectUrl: any;
  uid = '';

  constructor(private fireStore: AngularFirestore, private fireBaseAuth: AngularFireAuth, private router: Router) {}

  user = this.fireBaseAuth.authState.pipe(
    map((authState) => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    })
  );

  oAuthLogin() {
    return this.fireBaseAuth.signInWithPopup(new GoogleAuthProvider)
      .then(res => {
          this.router.navigate(['/filter']);
          localStorage.setItem('token', JSON.stringify(res.user?.uid))
      })
      .catch(err => alert(err));
  }

  login(email: string, password: string) {
    this.fireBaseAuth.signInWithEmailAndPassword(email,password).then(() => {
        localStorage.setItem('token','true');
        this.router.navigate(['/filter']);
    }, err => {
        alert("Erreur");
    }) 
  }

  register(email: string, password: string) {
    this.fireBaseAuth.createUserWithEmailAndPassword(email,password).then(() => {
        alert("Création du compte avec succès")
        this.router.navigate(['/login']);
    }, err => {
        alert("Erreur");
        this.router.navigate(['/register']);
    }) 
  }

  signOut() {
    this.fireBaseAuth.signOut().then(() => this.router.navigate(['/']));
  }

  readUser() {
    return this.fireBaseAuth.authState;
  }

  private updateUserData(user: { uid: any; displayName: any; email: any; photoURL: any; phoneNumber: any; }) {
    const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`Users/${user.uid}`);
    const data: User = {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        pseudo: null
    };

    return userRef.set(data, { merge: true});
}
  
 
}



