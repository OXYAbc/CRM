import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BodyModule } from './pages/body/body.module';
import { TableSetComponent } from './simple/table-set/table-set.component';
import { AngularFireModule} from '@angular/fire/compat/';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import * as firebase from 'firebase/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';


firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [AppComponent, SettingsComponent, TableSetComponent],
  imports: [
    BrowserModule,
    BodyModule,
    AngularFireModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
