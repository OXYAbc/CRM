import { Dialog } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AlertMessageComponent } from 'src/app/shared/components/alert/alert-message.component';
import { UsersService } from '../../users.service';
import { EditUserComponent } from './edit-user.component';

@Component({
  selector: 'app-data-detail-view',
  templateUrl: './data-detail-view.component.html',
  styleUrls: ['./data-detail-view.component.scss'],
})
export class DataDetailViewComponent {
  @Input() user?: User;
  @Input() users!: User[];
  @Input() userRole$?: Observable<string>;
  public score: string = 'No Data';

  constructor(private dialog: Dialog, private usersService: UsersService) {}
  openEditUserDialog() {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: { user: this.user, users: this.users },
    });
    dialogRef.closed.subscribe((res) => {
      if (res) {
        this.usersService.editUser(res as User);
      }
    });
  }
  mailto(email: string) {
    return (window.location.href = `mailto:${email}`);
  }

  onDeleteUser() {
    const dialogRef = this.dialog.open(AlertMessageComponent, {data: {type: 'user'}});
    dialogRef.closed.subscribe((res) => {
      if (res) {
        this.usersService.deleteTask(this.user?.id as string);
      }
    });
  }
  scoreLevel() {
    const score: number = this.user?.score as number;
    if (score >= 0) {
      return 'Good Worker';
    } else return 'Sufficient';
  }
  addScore(value: number) {
    this.user!.score += value;
    this.usersService.updateScore(
      this.user?.id as string,
      this.user?.score as number
    );
  }
}
