import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

export class ToggleDarkMode {
  static readonly type = 'TOGGLE_DARK_MODE';
  constructor(public mode:boolean) {}
}

@State<boolean>({
  name: 'darkMode',
  defaults: true
})
@Injectable()
export class DarkModeState {
  @Action(ToggleDarkMode)
  toggleDarkMode({ patchState }: StateContext<ToggleDarkMode>, action: ToggleDarkMode) {
      patchState({
        mode: action.mode,
      });
    }
}