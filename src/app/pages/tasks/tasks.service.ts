import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable()
export class TasksService {
  private tasksCollection: AngularFirestoreCollection<Task>;
  public tasks$: Observable<Task[]>;

  constructor(private angularFireStore: AngularFirestore) {
    this.tasksCollection = this.angularFireStore.collection(
      'Tasks',
      (ref) => ref
    );

    this.tasks$ = this.tasksCollection
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map((change) => new Task({ ...change.payload.doc.data() }))
        )
      );
  }
  addTask(task: Task) {
    this.tasksCollection.add(task);
  }

  getTask(name: string) {
    return this.angularFireStore.collection('Tasks').doc(name).get();
  }
}
