import { Injectable } from '@angular/core';
import { GoogleAuthProvider, updateProfile, User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { UsersService } from '../pages/users/users.service';
import { Login, Logout } from '../shared/login.action';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class LoginService {

  isLoggedIn = false;
  private userData = new BehaviorSubject<User | any>(null);
  constructor(
    private fireauth: AngularFireAuth,
    private router: Router,
    private userService: UsersService,
    private store: Store
  ) {
    if (sessionStorage.getItem('user') !== null) {
      this.isLoggedIn = true;
      this.router.navigate(['pages/dashboard']);
    } else this.isLoggedIn = false;

    this.fireauth.authState.subscribe((user) => {
      if (user) {
        this.userData.next(user);
        sessionStorage.setItem(
          'userDetails',
          JSON.stringify(this.userData.value)
        );
        JSON.parse(sessionStorage.getItem('userDetails')!);
      } else {
        sessionStorage.setItem('userDetails', 'null');
        JSON.parse(sessionStorage.getItem('userDetails')!);
      }
    });
  }

  login(email: string, password: string) {
    this.fireauth
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this.isLoggedIn = true;
        this.store.dispatch(new Login(res.user));
        this.router.navigate(['organization', res.user?.uid]);
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
        this.userService.createUser(res);
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
        this.store.dispatch(new Logout());
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
        const errorMessage = error.message;
        alert(errorMessage);
      }
    );
  }
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider()).then(
      (res) => {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this.isLoggedIn = true;
        this.userService.getUser(res.user?.uid as string).subscribe((result)=>{
          if(result == undefined) this.userService.createUser(res);
        })
        this.store.dispatch(new Login(res.user));
        this.router.navigate(['organization', res.user?.uid]);
      },
      (err) => {
        alert(err.message);
      }
    );
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
  getUser():Observable<User | any> {
    return this.userData
  }
  setDetails(user: any) {
    return updateProfile(this.userData.value, user)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
}
