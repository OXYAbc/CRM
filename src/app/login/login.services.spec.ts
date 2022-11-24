import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { GoogleAuthProvider, UserCredential } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { DashboardModule } from '../pages/dashboard/dashboard.module';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';
import { LoginService } from './login.service';

@Injectable()
export class afAuthMock {
  signInWithEmailAndPassword(login: string, pass: string) {
    return Promise.resolve('user');
  }
  signInWithPopup(property: any) {
    return Promise.resolve({ user: 'user' });
  }
  createUserWithEmailAndPassword() {
    return Promise.resolve();
  }
  sendPasswordResetEmail() {
    return Promise.resolve();
  }
  signOut(): Promise<void> {
    return Promise.resolve();
  }
  forgotPassword(esmial: string) {
    return Promise.resolve();
  }
}
export interface UserCredentialStub extends UserCredential {}

const userMock = {
  email: 'test@crm.com',
  password: 'password',
};

describe('LoginService', () => {
  let service: LoginService;
  let afAuth: AngularFireAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'auth/login', component: LoginComponent },
          { path: 'pages/dashboard', component: DashboardComponent },
        ]),
        LoginModule,
        DashboardModule,
      ],
      providers: [
        LoginService,
        { provide: AngularFireAuth, useClass: afAuthMock },
      ],
    });

    service = TestBed.inject(LoginService);
    afAuth = TestBed.inject(AngularFireAuth);
    service.isLoggedIn = false;
  });

  beforeEach(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to signInWithPopup', () => {
    const spyOnSingInwGoogle = spyOn(afAuth, 'signInWithPopup')
      .withArgs(new GoogleAuthProvider())
      .and.callThrough();
    service.googleSignIn();
    expect(spyOnSingInwGoogle).toHaveBeenCalled;
  });

  it('should not be initially authenticated', () => {
    expect(service.isLoggedIn).toBe(false);
  });

  it('should be call to createUser after register', () => {
    const spyOnMethod = spyOn(
      afAuth,
      'createUserWithEmailAndPassword'
    ).and.callThrough();
    service.register('test@crm.com', 'password');

    expect(afAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      userMock.email,
      userMock.password
    );
  });

  it('should be authenticated after logging in', async () => {
    service.isLoggedIn = false;
    const spyonMethod = spyOn(
      afAuth,
      'signInWithEmailAndPassword'
    ).and.callThrough();
    afAuth.signInWithEmailAndPassword('user', 'pass');
    service.login('test@crm.com', 'password');

    expect(spyonMethod).toHaveBeenCalledWith(userMock.email, userMock.password);
  });

  it('should not be authenticated after logging out', async () => {
    service.isLoggedIn = true;
    service.logout();
    await expect(service.isLoggedIn).toBeTrue;
  });
  it('should rerun value of isLoggedIn', () => {
    service.isLoggedIn = true;
    service.isAuthenticated();
    expect(service.isLoggedIn).toBeTrue();
  });
  it('should call to after sendPasswordResetEmail', async () => {
    const spyonMethod = spyOn(
      afAuth,
      'sendPasswordResetEmail'
    ).and.callThrough();
    service.forgotPassword('user');

    expect(spyonMethod).toHaveBeenCalledWith('user');
  });
});
