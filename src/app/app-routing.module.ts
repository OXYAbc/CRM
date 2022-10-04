import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectsModule } from './pages/projects/projects.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TasksModule } from './pages/tasks/tasks.module';
import { UsersComponent } from './pages/users/users.component';
import { UsersModule } from './pages/users/users.module';

const routes: Routes = [
  {path: 'pages/dashboard', component: DashboardComponent},
  {path: 'pages/projects', component: ProjectsComponent},
  {path: 'pages/tasks', component: TasksComponent},
  {path: 'pages/users', component: UsersComponent},
  {path: 'pages/settings', component: SettingsComponent},
  {path: '', redirectTo: 'pages/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
