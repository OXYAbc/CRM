import { DialogModule, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';

import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentsComponent],
      imports: [
        AppModule,
        DialogModule,
        CommonModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
        { provide: DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
