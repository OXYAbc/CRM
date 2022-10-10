import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BodyModule } from './pages/body/body.module';
import { TableSetComponent } from './simple/table-set/table-set.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat'


@NgModule({
  declarations: [AppComponent, SettingsComponent, TableSetComponent],
  imports: [
    BrowserModule,
    BodyModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
