import { CdkTableModule } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { TableProjectsComponent } from "./table-projects.component";

@NgModule({ imports: [CdkTableModule, ], declarations: [TableProjectsComponent], providers: [ ], exports:[TableProjectsComponent] })
export class TableProjectsModule {}
