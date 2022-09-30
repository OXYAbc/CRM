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
import { HeaderInfoComponent } from './simple/header-info/header-info.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardsProjectsComponent } from './pages/projects/cards-projects/cards-projects.component';
import { CardsTasksComponent } from './pages/tasks/cards-tasks/cards-tasks.component';
import { CardsUsersComponent } from './pages/users/cards-users/cards-users.component';
import { CardsDashboardComponent } from './pages/dashboard/cards-dashboard/cards-dashboard.component';
import { ProgressCardsComponent } from './pages/dashboard/cards-dashboard/progress-cards/progress-cards.component';
import { NotfCardComponent } from './pages/dashboard/cards-dashboard/notf-card/notf-card.component';
import { ControlPanelComponent } from './pages/tasks/cards-tasks/control-panel/control-panel.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailViewComponent } from './pages/tasks/cards-tasks/detail-view/detail-view.component';
import { CommentsComponent } from './pages/tasks/cards-tasks/detail-view/comments/comments.component';
import { CommentFormComponent } from './pages/tasks/cards-tasks/detail-view/comments/comment-form/comment-form.component';
import { EditTaskComponent } from './pages/tasks/cards-tasks/detail-view/edit-task/edit-task.component';

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
    HeaderInfoComponent,
    CardsProjectsComponent,
    CardsTasksComponent,
    CardsUsersComponent,
    CardsDashboardComponent,
    ProgressCardsComponent,
    NotfCardComponent,
    ControlPanelComponent,
    DetailViewComponent,
    CommentsComponent,
    CommentFormComponent,
    EditTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkMenuModule,
    CdkTableModule,
    HttpClientModule,
    DialogModule,
    TextFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
