import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BodyModule } from './pages/body/body.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { UsersModule } from './pages/users/users.module';
import { TasksModule } from './pages/tasks/tasks.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { TableSetComponent } from './simple/table-set/table-set.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent, SettingsComponent, TableSetComponent],
  imports: [
    BrowserModule,
    BodyModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
