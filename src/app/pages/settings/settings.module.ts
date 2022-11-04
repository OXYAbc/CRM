import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DarkModeToggleComponent } from 'src/app/simple/dark-mode-toggle.component';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [DarkModeToggleComponent, SettingsComponent],
  bootstrap: [],
  exports:[SettingsComponent]
})
export class SettingsModule {}
