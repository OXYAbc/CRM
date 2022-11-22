import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { BodyComponent } from './pages/body/body.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: 'pages',
    component: BodyComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard',
        canActivate: [AuthGuard],
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        title: 'Projects',
        canActivate: [AuthGuard],
      },
      {
        path: 'projects/:id',
        component: ProjectsComponent,
        title: 'Projects',
        canActivate: [AuthGuard],
      },
      {
        path: 'tasks/:id',
        component: TasksComponent,
        title: 'Tasks',
        canActivate: [AuthGuard],
      },
      {
        path: 'tasks',
        component: TasksComponent,
        title: 'Tasks',
        canActivate: [AuthGuard],
      },
      {
        path: 'users',
        component: UsersComponent,
        title: 'Users',
        canActivate: [AuthGuard],
      },
      {
        path: 'settings',
        component: SettingsComponent,
        title: 'Settings',
        canActivate: [AuthGuard],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
  {
    path: 'auth',
    children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        title: 'Forgot password',
      },
    ],
  },

  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
