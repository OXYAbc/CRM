import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsModule } from 'src/app/shared/card.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [FormsModule, CommonModule, CardsModule],
  declarations: [ SettingsComponent],
  bootstrap: [],
  exports: [SettingsComponent, ],
})
export class SettingsModule {}
