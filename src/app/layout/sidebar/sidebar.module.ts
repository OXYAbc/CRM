import { CdkMenuModule } from "@angular/cdk/menu";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar.component";

@NgModule({ imports: [CdkMenuModule, CommonModule, RouterModule], declarations: [SidebarComponent], providers: [ ], exports:[SidebarComponent] })
export class SidebarModule {}
