import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DarkModeState, ToggleDarkMode } from 'src/app/shared/thememode.state';

@Component({
  selector: 'app-light-dark-mode',
  template: `
    <div class="toggle">
      <input
        id="status"
        type="checkbox"
        name="status"
        [checked]="darkMode$ | async"
        (change)="onToggle()"
      />
      <label for="status">
        <div
          class="status-switch"
          data-unchecked="Light"
          data-checked="Dark"
        ></div>
      </label>
    </div>
  `,
})
export class LightDarkModeComponent {
  @Select(DarkModeState) darkMode$?: Observable<boolean>;
  private checked: boolean = true;

  constructor(private store: Store) {}

  onToggle() {
    this.checked = !this.checked;
    this.store.dispatch(new ToggleDarkMode(this.checked));
  }
}
