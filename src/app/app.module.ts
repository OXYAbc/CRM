import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './pages/body/body.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { UsersComponent } from './pages/users/users.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { HeaderInfoComponent } from './simple/header-info/header-info.component';
import { CardsComponent } from './layout/content/cards/cards.component';
import { CardsHeaderComponent } from './layout/content/cards/cards-header/cards-header.component';
import { CardsBodyComponent } from './layout/content/cards/cards-body/cards-body.component';
import { TabsetComponent } from './simple/tabset/tabset.component';
import { TabfilterComponent } from './simple/tabset/tabfilter/tabfilter.component';
import { MyProjectsComponent } from './simple/tabset/my-projects/my-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    DashboardComponent,
    TasksComponent,
    ProjectsComponent,
    UsersComponent,
    SettingsComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    HeaderInfoComponent,
    CardsComponent,
    CardsHeaderComponent,
    CardsBodyComponent,
    TabsetComponent,
    TabfilterComponent,
    MyProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
