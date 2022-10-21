import { Injectable } from '@angular/core';
import { Project, Task } from 'src/app/models/projects.model';
import { map, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projectCollection: AngularFirestoreCollection<Project>;
  public project$: Observable<Project[]>;

  constructor(public angularFirestore: AngularFirestore) {
    this.projectCollection = this.angularFirestore.collection('Projects', (ref) => ref);

    this.project$ = this.projectCollection
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => {
            const task = new Project({ ...change.payload.doc.data(), id: change.payload.doc.id })
            return task
          })
        )
      );
  }

  addProject(project: Project) {
    this.projectCollection.add(project);
  }

  getProject(id: string) {
    return this.angularFirestore.collection('Projects').doc(id).valueChanges();
  }
  updateTasks(tasksArray:Task[], id:string){
    this.angularFirestore
    .collection('Projects')
    .doc(id)
    .update({
      tasks: tasksArray,
    });
  }
}
