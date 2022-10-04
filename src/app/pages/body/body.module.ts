import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HeaderModule } from "src/app/layout/header/header.module";
import { SidebarModule } from "src/app/layout/sidebar/sidebar.module";
import { DashboardModule } from "../dashboard/dashboard.module";
import { ProjectsModule } from "../projects/projects.module";
import { TasksModule } from "../tasks/tasks.module";
import { UsersModule } from "../users/users.module";
import { BodyComponent } from "./body.component";
import { BodyService } from "./body.service";

@NgModule({ imports: [HttpClientModule, ProjectsModule, TasksModule, UsersModule, DashboardModule, SidebarModule, HeaderModule, AppRoutingModule, RouterTestingModule], declarations: [BodyComponent], providers: [ BodyService ], exports:[BodyComponent] })
export class BodyModule {}
