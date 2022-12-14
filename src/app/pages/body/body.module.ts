import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderModule } from 'src/app/layout/header/header.module';
import { SidebarModule } from 'src/app/layout/sidebar/sidebar.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { OrganizationModule } from '../organization/organization.module';
import { ProjectsModule } from '../projects/projects.module';
import { SettingsModule } from '../settings/settings.module';
import { TasksModule } from '../tasks/tasks.module';
import { UsersDashboardModule } from '../user-dashboard/user-dashboard.module';
import { UsersModule } from '../users/users.module';
import { BodyComponent } from './body.component';
import { BodyService } from './body.service';

@NgModule({
  imports: [
    HttpClientModule,
    ProjectsModule,
    TasksModule,
    UsersModule,
    DashboardModule,
    SidebarModule,
    HeaderModule,
    AppRoutingModule,
    RouterModule,
    SettingsModule,
    UsersDashboardModule,
    OrganizationModule
  ],
  declarations: [BodyComponent],
  providers: [BodyService],
  exports: [BodyComponent],
})
export class BodyModule {} 