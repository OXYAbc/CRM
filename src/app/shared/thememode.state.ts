import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

export class ToggleDarkMode {
  static readonly type = 'TOGGLE_DARK_MODE';
  constructor(public mode:any) {}
}

@State<any>({
  name: 'darkMode',
  defaults: {darkmode: true}
})
@Injectable()
export class DarkModeState {
  @Action(ToggleDarkMode)
  toggleDarkMode({ patchState }: StateContext<any>, action: ToggleDarkMode) {
      patchState({
        darkmode: action.mode,
      });
    }
}