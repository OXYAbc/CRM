import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Organization } from 'src/app/models/organization.model';
import { UsersService } from '../users/users.service';

@Injectable({ providedIn: 'root' })
@Injectable()
export class OrganizationService {
  public organizationId: string = '';
  private subscription = new Subscription();
  organizationCollection: AngularFirestoreCollection<any> =
    this.angularFirestore.collection('Organizations', (ref) => ref);

  constructor(
    public angularFirestore: AngularFirestore,
    private userService: UsersService,
    private router: Router
  ) {
    const orgId = sessionStorage.getItem('orgid');
    if (orgId !== null) this.organizationId = orgId;
  }

  createOgranization(org: Organization, uid: string) {
    this.organizationCollection
      .add(org)
      .then((res: any) => {
        this.organizationId = res.id;
        this.userService.setOrganization(uid, res.id);
        this.setOrganization(res.id);
        this.router.navigate(['pages/dashboard']);
      })
      .finally(() => {
        this.organizationCollection
          .doc(this.organizationId)
          .collection('Tasks')
          .add({});
        this.organizationCollection
          .doc(this.organizationId)
          .collection('Project')
          .add({});
        this.organizationCollection
          .doc(this.organizationId)
          .collection('Users')
          .add({});
      });
  }
  joinToOrganization(id: string, uid: string) {
    const sub = this.organizationCollection
      .doc(id)
      .get()
      .subscribe((res) => {
        if (res.exists) {
          this.organizationId = id;
          this.userService.setOrganization(uid, id);
          this.setOrganization(id);
          this.router.navigate(['pages/dashboard']);
        } else {
          alert('Incorrect ID !');
        }
      });
    this.subscription.add(sub);
  }
  setOrganization(id: string) {
    this.organizationId = id;
    sessionStorage.setItem('orgid', this.organizationId);
    this.router.navigate(['pages/dashboard']);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
