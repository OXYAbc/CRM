import { NgModule } from "@angular/core";
import { HeaderInfoModule } from "src/app/simple/header-info/header-info.module";
import { HeaderComponent } from "./header.component";

@NgModule({ imports: [HeaderInfoModule], declarations: [HeaderComponent], providers: [], exports: [HeaderComponent] })
export class HeaderModule {}
