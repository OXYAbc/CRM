import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './projects.component';
import { ProjectsService } from './projects.service';
import { CardsProjectsModule } from './cards-projects/cards-projects.module';

@NgModule({
  imports: [CardsProjectsModule],
  declarations: [ProjectsComponent],
  providers: [ProjectsService],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
