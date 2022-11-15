import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: 'pages/dashboard', component: DashboardComponent },
  { path: 'pages/projects', component: ProjectsComponent },
  { path: 'pages/projects/:id', component: ProjectsComponent },
  { path: 'pages/tasks/:id', component: TasksComponent },
  { path: 'pages/tasks', component: TasksComponent },
  { path: 'pages/users', component: UsersComponent },
  { path: 'pages/settings', component: SettingsComponent },
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
