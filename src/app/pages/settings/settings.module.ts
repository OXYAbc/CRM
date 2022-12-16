import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardsModule } from 'src/app/shared/card.module';
import { LightDarkModeComponent } from 'src/app/simple/header-info/change-class-stage-emitter/change-class-stage-emitter.component';
import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [FormsModule, CommonModule, CardsModule],
  declarations: [SettingsComponent, LightDarkModeComponent],
  bootstrap: [],
  exports: [SettingsComponent],
})
export class SettingsModule {}
