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

@NgModule({
  declarations: [AppComponent, SettingsComponent, TableSetComponent],
  imports: [
    BrowserModule,
    BodyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
