import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { TasksData } from 'src/app/models/tasks.model';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { where } from 'firebase/firestore';

@Injectable({ providedIn: 'root' })
export class TasksService {
  TasksCollection: AngularFirestoreCollection<TasksData>;
  Tasks: Observable<TasksData[]>;

  constructor(public afs: AngularFirestore) {
    // this.Tasks = this.afs.collection('Tasks').valueChanges();
    this.TasksCollection = this.afs.collection('Tasks', (ref) => ref);

    this.Tasks = this.TasksCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as TasksData;
          data.name = a.payload.doc.id;
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

  // return this.TasksCollection.doc(name).ref.get().then(e => e)

  // create_Newemployee(Record)

  // {
  //   return this.fireservices.collection('Employee').add(Record);
  // }

  // update_employee(recordid, record)
  // {
  //   this.fireservices.doc('Employee/' + recordid).update(record);
  // }

  // delete_employee(record_id)
  // {
  //   this.fireservices.doc('Employee/' + record_id).delete();
  // }
}
