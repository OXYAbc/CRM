import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
@Injectable()
export class LoginService {
  isLoggedIn = false;
  private user$ = new BehaviorSubject<any>(sessionStorage.getItem('Token'));
  constructor(private fireauth: AngularFireAuth, private router: Router) {
    sessionStorage.setItem('Token', 'test');
  }

  login(email: string, password: string) {
    this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        sessionStorage.setItem('Token', JSON.stringify(res.user));
        this.isLoggedIn = true;
        this.router.navigate(['pages/dashboard']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        this.router.navigate(['/login']);
      });
  }
  register(email: string, password: string) {
    this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        alert('Sucsessful !');
        this.router.navigate(['login']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        this.router.navigate(['/login']);
      });
  }
  logout() {
    this.fireauth.signOut().then(
      () => {
        sessionStorage.removeItem('Token');
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      }
    );
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
