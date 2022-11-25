import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from 'src/app/shared/card.module';
import { UserDashboardComponent } from './user-dashboard.component';

@NgModule({
  imports: [CardsModule, CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [UserDashboardComponent],
  bootstrap: [],
  exports: [UserDashboardComponent],
})
export class UsersDashboardModule {}
