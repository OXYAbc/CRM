import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';
import { CardsComponent } from './shared/cards.component';

const routes: Routes = [
  { path: 'test', component: CardsComponent, title: 'Test' },
  { path: 'pages/dashboard', component: DashboardComponent, title: 'Dashboard' },
  { path: 'pages/projects', component: ProjectsComponent, title: 'Projects' },
  {
    path: 'pages/projects/:id',
    component: ProjectsComponent,
    title: 'Projects',
  },
  { path: 'pages/tasks/:id', component: TasksComponent, title: 'Tasks' },
  { path: 'pages/tasks', component: TasksComponent, title: 'Tasks' },
  { path: 'pages/users', component: UsersComponent, title: 'Users' },
  { path: 'pages/settings', component: SettingsComponent, title: 'Settings' },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
