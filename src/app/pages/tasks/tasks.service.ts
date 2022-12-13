import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, switchMap, tap } from 'rxjs';
import { Task, Comment } from 'src/app/models/tasks.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { LoginService } from 'src/app/login/login.service';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private searchWord = new BehaviorSubject<string>('');
  public userId: string ='';
  private tasksCollection!: AngularFirestoreCollection<Task>;
  
  public task$: Observable<Task[]> = this.loginService.getUser().pipe(
      map(user => user?.uid),
      tap((userId: string) => {
          this.userId = userId;
          this.tasksCollection = this.angularFireStore.collection('Tasks', (ref) =>
              ref.where('userId', '==', this.userId)
          );
      }),
      switchMap(() => {
          return this.tasksCollection.snapshotChanges()
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
      })
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
  
  constructor(private angularFireStore: AngularFirestore, private loginService: LoginService) { }

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
