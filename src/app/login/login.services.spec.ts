import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, of } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class afAuthMock {
    signInWithEmailAndPassword(login: string, pass:string){}
    signInWithPopup(){
        return of({user: 'test'})
    }
    createUserWithEmailAndPassword(){}
    sendPasswordResetEmail(){}
}

const userMock = {
  email: 'test@crm.com',
  password: 'password',
};

const fakeAuthState = new BehaviorSubject(userMock);
const fakeSignInHandler = (email: any, password: any): Promise<any> => {
  fakeAuthState.next(userMock);
  return Promise.resolve(userMock);
};
const fakeSignOutHandler = (): Promise<any> => {
  fakeAuthState.next(userMock);
  return Promise.resolve();
};

const angularFireAuthStub = {
  authState: fakeAuthState,
  auth: {
    createUserWithEmailAndPassword: jasmine
      .createSpy('createUserWithEmailAndPassword')
      .and.callFake(fakeSignInHandler),
    signInWithEmailAndPassword: jasmine
      .createSpy('signInWithEmailAndPassword')
      .and.callFake(fakeSignInHandler),
    signOut: jasmine.createSpy('signOut').and.callFake(fakeSignOutHandler),
  },
};

describe('UserService', () => {
  let service: LoginService;
  let afAuth: AngularFireAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginService,
        { provide: AngularFireAuth, useClass: afAuthMock },
      ],
    });

    service = TestBed.inject(LoginService);
    afAuth = TestBed.inject(AngularFireAuth);
  });

  beforeEach(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call to signInWithPopup', () => {
    const spyOnSingInwGoogle = spyOn(afAuth, 'signInWithPopup');
    service.googleSignIn();
    expect(spyOnSingInwGoogle).toHaveBeenCalled;
  });

  it('should not be initially authenticated', () => {
    expect(service.isLoggedIn).toBe(false);
  });

  it('should be authenticated after register', () => {
    service.register('test@crm.com', 'password');

    expect(afAuth.createUserWithEmailAndPassword).toHaveBeenCalledWith(
      userMock.email,
      userMock.password
    );
    expect(service.isLoggedIn).toBe(true);
  });

  it('should be authenticated after logging in', () => {
    service.login('test@crm.com', 'password');

    expect(afAuth.signInWithEmailAndPassword).toHaveBeenCalledWith(
      userMock.email,
      userMock.password
    );
    expect(service.isLoggedIn).toBeTruthy();
  });

  it('should not be authenticated after logging out', () => {
    service.isLoggedIn = true;
    service.logout();
    expect(service.isLoggedIn).toBe(false);
  });
});
