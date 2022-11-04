import { Component, Input } from '@angular/core';
import { Project, Task } from 'src/app/models/projects.model';

@Component({
  selector: 'app-progress-cards',
  templateUrl: './progress-cards.component.html',
  styleUrls: ['./progress-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCardsComponent {
  @Input() projects: Project[] = [];
  checkStage(task: Task){
    switch(task.stage){
      case "toDo":{
        return "to-do"
      }
      case "inProgress":{
        return "in-progress"
      }
      case "inReview":{
        return "in-review"
      }
      case "done":{
        return "done"
      }
      default:{
        return ''
      }
    }
  }
 
  levelOfComplited(project:Project){
    const mainLength: number = project.tasks.length
    const toDoPercent: number = (project.tasks.filter((res: Task) => res.stage == 'toDo').length/mainLength)*100
    const inProgressPercent: number = (project.tasks.filter((res: Task) => res.stage == 'inProgress').length/mainLength)*100
    const inReviewPercent: number = (project.tasks.filter((res: Task) => res.stage == 'inReview').length/mainLength)*100
    const donePercent: number = (project.tasks.filter((res: Task) => res.stage == 'done').length/mainLength)*100
    return `Project complited✔ in ${donePercent.toFixed(2)} %, tasks to do: 🟧${toDoPercent.toFixed(2)} %, in progress 🟨${inProgressPercent.toFixed(2)} %, in review 🟩${inReviewPercent.toFixed(2)} %`
  }
}
