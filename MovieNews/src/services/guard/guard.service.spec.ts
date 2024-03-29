import { inject, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../guard/guard.service';

describe('AuthGuard', () => {

  const firebaseConfig = {
    apiKey: 'foo',
    authDomain: 'bar',
    databaseURL: 'baz',
    projectId: '0',
    storageBucket: 'foo',
    messagingSenderId: 'bar'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireAuthModule,
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        RouterTestingModule
      ],
      providers: [
        AngularFireAuthModule,
        AuthGuard,
        AuthService
      ]
    });
  });

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});