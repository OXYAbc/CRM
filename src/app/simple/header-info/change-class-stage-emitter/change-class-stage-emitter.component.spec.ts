import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { DarkModeState, ToggleDarkMode } from 'src/app/shared/thememode.state';

import { LightDarkModeComponent } from './change-class-stage-emitter.component';

describe('LightDarkModeComponent', () => {
  let component: LightDarkModeComponent;
  let fixture: ComponentFixture<LightDarkModeComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightDarkModeComponent],
      imports: [NgxsModule.forRoot([DarkModeState])],
      providers: [
        {
          provide: Store,
          useValue: {
            select: () => of(false),
            dispatch: () => ({}),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LightDarkModeComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should dispatch ToggleDarkMode action on onToggle', () => {
    spyOn(store, 'dispatch');
    component.onToggle();
    expect(store.dispatch).toHaveBeenCalledWith(new ToggleDarkMode(false));
  });
});
