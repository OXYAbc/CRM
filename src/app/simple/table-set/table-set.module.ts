import { CdkTableModule } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { TableSetComponent } from "./table-set.component";

@NgModule({ imports: [CdkTableModule, ], declarations: [TableSetComponent], providers: [ ], exports:[TableSetComponent] })
export class TableProjectsModule {}
