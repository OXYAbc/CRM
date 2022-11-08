import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private searchWord = new BehaviorSubject<string>('');
  private userCollection: AngularFirestoreCollection<User> =
    this.angularFirestore.collection('Users', (ref) => ref);
  public user$: Observable<User[]> = this.userCollection.snapshotChanges().pipe(
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
  public users$ = combineLatest([this.user$, this.searchWord]).pipe(
    map(([usersArray, searchWord]) => {
      return usersArray.filter((user) => {
        return user.firstName
          .toLocaleLowerCase()
          .includes(searchWord.toLocaleLowerCase());
      });
    })
  );

  constructor(public angularFirestore: AngularFirestore) {}

  addUser(user: User) {
    this.userCollection.add(user);
  }
  setSearchWord(word: string) {
    this.searchWord.next(word);
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
