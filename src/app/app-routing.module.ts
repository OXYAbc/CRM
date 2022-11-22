import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';
import { CardComponent } from './shared/card.component';

const routes: Routes = [
  { path: 'test', component: CardComponent, title: 'Test' },
  {
    path: 'pages/dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate:[AuthGuard]
  },
  { path: 'pages/projects', component: ProjectsComponent, title: 'Projects', canActivate:[AuthGuard] },
  {
    path: 'pages/projects/:id',
    component: ProjectsComponent,
    title: 'Projects', canActivate:[AuthGuard]
  },
  { path: 'pages/tasks/:id', component: TasksComponent, title: 'Tasks', canActivate:[AuthGuard] },
  { path: 'pages/tasks', component: TasksComponent, title: 'Tasks', canActivate:[AuthGuard] },
  { path: 'pages/users', component: UsersComponent, title: 'Users', canActivate:[AuthGuard] },
  { path: 'pages/settings', component: SettingsComponent, title: 'Settings', canActivate:[AuthGuard] },
  { path: 'login', component: LoginComponent, title: 'Login'},
  { path: 'forgot-password', component: ForgotPasswordComponent, title: 'Forgot password'},
  { path: '', redirectTo: 'pages/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
