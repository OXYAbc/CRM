import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private userCollection: AngularFirestoreCollection<User>;
  public user$: Observable<User[]>;

  constructor(public angularFirestore: AngularFirestore) {
    this.userCollection = this.angularFirestore.collection(
      'Users',
      (ref) => ref
    );

    this.user$ = this.userCollection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((change) => {
          const task = new User({
            ...change.payload.doc.data(),
            id: change.payload.doc.id,
          });
          return task;
        })
      )
    );
  }

  addUser(user: User) {
    this.userCollection.add(user);
  }
  editUser(editUser: User) {
    this.angularFirestore.collection('Users').doc(editUser.id).update(editUser);
  }

  deleteTask(id: string) {
    this.angularFirestore.collection('Users').doc(id).delete();
  }

  updateScore(id: string, newScore: number) {
    this.angularFirestore
      .collection('Users')
      .doc(id)
      .update({ score: newScore });
  }

  getUser(id: string) {
    return this.angularFirestore.collection('Users').doc(id).valueChanges();
  }
}
