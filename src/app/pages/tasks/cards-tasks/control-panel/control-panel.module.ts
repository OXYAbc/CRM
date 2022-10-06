import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ControlPanelComponent } from './control-panel.component';

@NgModule({ imports: [ FormsModule, ReactiveFormsModule, CommonModule ], declarations: [ControlPanelComponent], providers: [ ], exports: [ControlPanelComponent] })
export class ControlPanelModule {}
