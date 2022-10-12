import { Injectable } from '@angular/core';
import { ProjectsData } from 'src/app/models/projects.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  userCollection: AngularFirestoreCollection<ProjectsData>;
  user: Observable<ProjectsData[]>;

  constructor(public afs: AngularFirestore) {
    // this.user = this.afs.collection('user').valueChanges();
    this.userCollection = this.afs.collection('Projects', (ref) => ref);

    this.user = this.userCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as ProjectsData;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getProjects() {
    return this.user;
  }

  addProject(user: ProjectsData) {
    this.userCollection.add(user);
  }

  getProject(id: string) {
    return this.afs.collection('Projects').doc(id).valueChanges();
  }
}
