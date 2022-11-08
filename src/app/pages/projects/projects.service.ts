import { Injectable } from '@angular/core';
import { Project, Task } from 'src/app/models/projects.model';
import { BehaviorSubject, combineLatest, map, Observable, tap } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  public searchWord = new BehaviorSubject<string>('');
  projectCollection: AngularFirestoreCollection<Project> =
    this.angularFirestore.collection('Projects', (ref) => ref);
  project$: Observable<Project[]> = this.projectCollection
    .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map((change) => {
          const task = new Project({
            ...change.payload.doc.data(),
            id: change.payload.doc.id,
          });
          return task;
        })
      )
    );
  public projects$ = combineLatest([this.project$, this.searchWord]).pipe(
    map(([project, searchWord]) => {
      return project.filter((item) => {
        return item.name
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase());
      });
    })
  );
  constructor(public angularFirestore: AngularFirestore) {}

  addProject(project: Project) {
    this.projectCollection.add(project);
  }

  setSearchWord(word: string) {
    this.searchWord.next(word);
  }

  getProject(id: string) {
    return this.angularFirestore.collection('Projects').doc(id).valueChanges();
  }
  updateTasks(tasksArray: Task[], id: string) {
    this.angularFirestore.collection('Projects').doc(id).update({
      tasks: tasksArray,
    });
  }
}
