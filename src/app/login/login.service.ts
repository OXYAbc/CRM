import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
@Injectable()
export class LoginService {
  isLoggedIn = false;
  constructor(private fireauth: AngularFireAuth, private router: Router) {
    if (sessionStorage.getItem('user') !== null) {
      this.isLoggedIn = true;
      this.router.navigate(['pages/dashboard']);
    } else this.isLoggedIn = false;
  }

  login(email: string, password: string) {
    this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this.isLoggedIn = true;
        this.router.navigate(['pages/dashboard']);
      })
      .catch((error) => {
        alert(error.message);
        this.router.navigate(['/login']);
      });
  }
  register(email: string, password: string) {
    this.fireauth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        alert('Sucsessful !');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        alert(error.message);
        this.router.navigate(['/login']);
      });
  }
  logout() {
    this.fireauth.signOut().then(
      () => {
        sessionStorage.removeItem('user');
        this.isLoggedIn = false;
        this.router.navigate(['/auth/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['auth/login']);
      },
      (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      }
    );
  }
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {
      sessionStorage.setItem('user',JSON.stringify(res.user));
      this.isLoggedIn = true;
      this.router.navigate(['pages/dashboard']);
    }, err => {
      alert(err.message);
    })
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
