import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsModule } from 'src/app/shared/card.module';
import { DarkModeToggleComponent } from 'src/app/simple/dark-mode-toggle.component';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [FormsModule, CommonModule, CardsModule],
  declarations: [DarkModeToggleComponent, SettingsComponent],
  bootstrap: [],
  exports: [SettingsComponent, DarkModeToggleComponent],
})
export class SettingsModule {}
