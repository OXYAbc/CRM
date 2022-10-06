import { DialogModule } from "@angular/cdk/dialog";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AddUserComponent } from "./add-user.component";

@NgModule({ imports: [DialogModule, ReactiveFormsModule, CommonModule], declarations: [AddUserComponent], providers: [ ], exports:[AddUserComponent] })
export class AddUserModule {}