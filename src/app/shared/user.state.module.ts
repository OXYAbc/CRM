import { NgModule } from "@angular/core";
import { NgxsModule } from "@ngxs/store";
import { UserState } from "./user.state";

@NgModule({
    imports: [NgxsModule.forRoot([UserState])]
  })
  export class UserStateModule {}