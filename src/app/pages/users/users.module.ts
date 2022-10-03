import { NgModule } from '@angular/core';
import { CardsUsersModule } from './cards-users/cards-users.module';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { CardsUsersComponent } from './cards-users/cards-users.component';

@NgModule({ imports: [CardsUsersModule, HttpClientModule], declarations: [UsersComponent], providers: [ UsersService ] })
export class UsersModule {}
