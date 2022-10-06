import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './tasks.service';
import { TasksComponent } from './tasks.component';
import { CardsTasksModule } from './cards-tasks/cards-tasks.module';
import { CardsTasksComponent } from './cards-tasks/cards-tasks.component';

@NgModule({ imports: [ HttpClientModule, CardsTasksModule], declarations: [TasksComponent], providers: [ TasksService ] })
export class TasksModule {}
