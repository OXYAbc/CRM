import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CardsModule } from "src/app/shared/card.module";
import { ForgotPasswordComponent } from "./forgot-password.component";

@NgModule({
    declarations: [ForgotPasswordComponent],
    imports: [FormsModule, CommonModule, CardsModule],
    providers: [],
    exports: [ForgotPasswordComponent],
  })
  export class ForgotPassModule {}
  