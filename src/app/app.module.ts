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
import { CdkMenuModule } from '@angular/cdk/menu';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardsProjectsComponent } from './pages/projects/cards-projects/cards-projects.component';
import { CardsDetailLookComponent } from './pages/projects/cardsProjects/cards-detail-look/cards-detail-look.component';
import { CardsProjectsViewComponent } from './pages/projects/cardsProjects/cards-projects-view/cards-projects-view.component';
import { CardsTasksComponent } from './pages/tasks/cards-tasks/cards-tasks.component';
import { CardsUsersComponent } from './pages/users/cards-users/cards-users.component';
import { DataControlComponent } from './pages/projects/cards-projects/data-control/data-control.component';
import { CardsDashboardComponent } from './pages/dashboard/cards-dashboard/cards-dashboard.component';
import { ProgressCardsComponent } from './pages/dashboard/cards-dashboard/progress-cards/progress-cards.component';
import { NotfCardComponent } from './pages/dashboard/cards-dashboard/notf-card/notf-card.component';
import { ControlComponentComponent } from './pages/projects/cards-projects/control-component/control-component.component';
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
    ContentComponent,
    HeaderInfoComponent,
    CardsComponent,
    CardsHeaderComponent,
    CardsBodyComponent,
    TabsetComponent,
    TabfilterComponent,
    MyProjectsComponent,
    CardsProjectsComponent,
    CardsDetailLookComponent,
    CardsProjectsViewComponent,
    CardsTasksComponent,
    CardsUsersComponent,
    DataControlComponent,
    CardsDashboardComponent,
    ProgressCardsComponent,
    NotfCardComponent,
    ControlComponentComponent,
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
    FormBuilder,
    Dialog,
    DialogModule,
    HttpClient,
    HttpClientModule,
    FormBuilder
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
