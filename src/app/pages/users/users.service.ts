import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, Observable, pipe } from 'rxjs';
import { UserData } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  userCollection: AngularFirestoreCollection<UserData>;
  user: Observable<UserData[]>;

  constructor(public afs: AngularFirestore) {
    // this.user = this.afs.collection('user').valueChanges();
    this.userCollection = this.afs.collection('Users', (ref) => ref);

    this.user = this.userCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as UserData;
          data.userId = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getUsers() {
    return this.user;
  }

  addUser(user: UserData) {
    this.userCollection.add(user);
  }

  getUser(id: string) {
    return this.afs.collection('Users').doc(id).valueChanges();
  }
}
