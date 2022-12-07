import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Organization } from 'src/app/models/organization.model';
import { UsersService } from '../users/users.service';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { OrganizationService } from './organization.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss'],
})
export class OrganizationComponent implements OnInit {

  public organization: boolean = false;
  protected orgId: string = '';
  private userID: string = '';
  protected yourorg: any;
  constructor(
    private dialog: Dialog,
    private orgService: OrganizationService,
    private userService: UsersService,
    private route: ActivatedRoute,
  ) {

    this.route.params.subscribe(
      (params: Params) => (this.userID = params['id'])
    );
    this.userService.getUser(this.userID).subscribe((res: any) => {
      if (res.organization) {
        this.orgService.setOrganization(res.organization);
      }
    });
  }

  ngOnInit(): void {}
  onCreateOrganization() {
    const dialogRef = this.dialog.open(CreateOrganizationComponent);
    dialogRef.closed.subscribe((res) => {
      if (res)
        this.orgService.createOgranization(res as Organization, this.userID);
    });
  }

  onJoinOrganization() {
    this.orgService.joinToOrganization(this.orgId, this.userID);
  }
}
