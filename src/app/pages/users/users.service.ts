import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private usersCollection: AngularFirestoreCollection<User>;
  public users$: Observable<User[]>;

  constructor(public sngularFirestore: AngularFirestore) {
    this.usersCollection = this.sngularFirestore.collection(
      'Users',
      (ref) => ref
    );

    this.users$ = this.usersCollection.snapshotChanges().pipe(
      map((changes) =>
        changes.map((change) => {
          const user = new User({ ...change.payload.doc.data() });
          user.userId = change.payload.doc.id;
          return user;
        })
      )
    );
  }
}
