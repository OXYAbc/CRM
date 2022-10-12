import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TasksData } from 'src/app/models/tasks.model';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class TasksService {
  TasksCollection: AngularFirestoreCollection<TasksData>;
  Tasks: Observable<TasksData[]>;

  constructor(public afs: AngularFirestore) {
    this.TasksCollection = this.afs.collection('Tasks', (ref) => ref);

    this.Tasks = this.TasksCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as TasksData;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getTasks() {
    return this.Tasks;
  }

  addTask(task: TasksData) {
    this.TasksCollection.add(task);
  }

  getTask(name: string) {
    return this.afs.collection('Tasks').doc(name).valueChanges();
  }
}
