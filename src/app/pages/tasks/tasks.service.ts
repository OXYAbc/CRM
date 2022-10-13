import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from 'src/app/models/tasks.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private TasksCollection: AngularFirestoreCollection<Task>;
  private Tasks$: Observable<Task[]>;

  constructor(public afs: AngularFirestore) {
    this.TasksCollection = this.afs.collection('Tasks', (ref) => ref);

    this.Tasks$ = this.TasksCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((change) => {
          const task : Task = new Task({...change.payload.doc.data()});
          return task;
        });
      })
    );
  }

  getTasks() {
    return this.Tasks$;
  }

  addTask(task: Task) {
    this.TasksCollection.add(task);
  }

  getTask(name: string) {
    return this.afs.collection('Tasks').doc(name).valueChanges();
  }
}
