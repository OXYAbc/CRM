import { NgModule } from "@angular/core";
import { ProjectsService } from "../projects/projects.service";
import { CardsDashboardModule } from "./cards-dashboard/cards-dashboard.module";
import { DashboardComponent } from "./dashboard.component";

@NgModule({ imports: [CardsDashboardModule], declarations: [DashboardComponent], providers: [ ProjectsService ] })
export class DashboardModule {}
