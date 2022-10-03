import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './tasks.service';
import { CardsTasksComponent } from './cards-tasks/cards-tasks.component';

@NgModule({ imports: [ HttpClientModule], declarations: [CardsTasksComponent], providers: [ TasksService ] })
export class UsersModule {}
