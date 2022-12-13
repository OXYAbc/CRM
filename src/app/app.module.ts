import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BodyModule } from './pages/body/body.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { CardsModule } from './shared/card.module';
import { LoginService } from './login/login.service';
import { AuthGuard } from './auth/auth.guard';
import { LoginModule } from './login/login.module';
import { RouterModule } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './shared/user.state';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BodyModule,
    CardsModule,
    LoginModule,
    AngularFireModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    NgxsModule.forRoot([UserState])
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }, LoginService, AuthGuard],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
