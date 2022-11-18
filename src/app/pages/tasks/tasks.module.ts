import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TasksService } from './tasks.service';
import { TasksComponent } from './tasks.component';
import { CardsTasksModule } from './cards-tasks/cards-tasks.module';
import { CardsModule } from 'src/app/shared/card.module';

@NgModule({
  imports: [HttpClientModule, CardsTasksModule, CardsModule],
  declarations: [TasksComponent],
  providers: [TasksService],
})
export class TasksModule {}
