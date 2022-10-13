import { Injectable } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { map, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private projectsCollection: AngularFirestoreCollection<Project>;
  public project$: Observable<Project[]>;

  constructor(public angularFirestore: AngularFirestore) {
    this.projectsCollection = this.angularFirestore.collection(
      'Projects',
      (ref) => ref
    );

    this.project$ = this.projectsCollection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((change) => {
          const user = new Project({ ...change.payload.doc.data() });
          user.id = change.payload.doc.id;
          return user;
        })
      )
    );
  }
}
