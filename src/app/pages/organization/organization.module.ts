import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from 'src/app/shared/card.module';
import { OrganizationComponent } from './organization.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';

@NgModule({
  imports: [CardsModule, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [OrganizationComponent, CreateOrganizationComponent],
  exports: [OrganizationComponent],
})
export class OrganizationModule {}
