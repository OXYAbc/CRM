import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Task, DbTask } from 'src/app/models/tasks.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
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
    return this.angularFireStore.collection('Tasks').doc(name).valueChanges();
  }
  checkTask(id: string) {
    this.angularFireStore.collection('Tasks').doc(id).update({ check: true });
  }
  uncheckTask(id: string) {
    this.angularFireStore.collection('Tasks').doc(id).update({ check: false });
  }

  editTask(taskEdit: any) {
    this.angularFireStore.collection('Tasks').doc(taskEdit.id).update(taskEdit);
  }

  deleteTask(id: string) {
    this.angularFireStore.collection('Tasks').doc(id).delete();
  }

  addComment(taskComment: { user: string; comment: string }[], id: string) {
    this.angularFireStore.collection('Tasks').doc(id).update({
      comments: taskComment,
    });
  }
}
