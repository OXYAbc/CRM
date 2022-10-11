import { CdkTableModule } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { AddProjectModule } from "../add-project/add-project.module";
import { TableProjectsComponent } from "./table-projects.component";

@NgModule({ imports: [CdkTableModule, AddProjectModule], declarations: [TableProjectsComponent], providers: [ ], exports:[TableProjectsComponent] })
export class TableProjectsModule {}
