import { DialogModule } from "@angular/cdk/dialog";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddUserComponent } from "./add-user.component";

@NgModule({ imports: [DialogModule, ReactiveFormsModule], declarations: [AddUserComponent], providers: [ ], exports:[AddUserComponent] })
export class AddUserModule {} 