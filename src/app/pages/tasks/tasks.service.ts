import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Task, DbTask, Comment } from 'src/app/models/tasks.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private searchWord = new BehaviorSubject<string>('');
  private tasksCollection: AngularFirestoreCollection<Task> =
    this.angularFireStore.collection('Tasks', (ref) => ref);

  public task$: Observable<Task[]> = this.tasksCollection
    .snapshotChanges()
    .pipe(
      map((changes) =>
        changes.map((change) => {
          const task = new Task({
            ...change.payload.doc.data(),
            id: change.payload.doc.id,
          });
          return task;
        })
      )
    );
  public tasks$ = combineLatest([this.task$, this.searchWord]).pipe(
    map(([tasksArray, searchWord]) => {
      return tasksArray.filter((task) => {
        return task.name
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase());
      });
    })
  );

  constructor(private angularFireStore: AngularFirestore) {}

  addTask(task: Task) {
    this.tasksCollection.add(task);
  }
  setSearchWord(word: string) {
    this.searchWord.next(word);
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

  addComment(taskComment: Comment[], id: string) {
    this.angularFireStore.collection('Tasks').doc(id).update({
      comments: taskComment,
    });
  }
}
