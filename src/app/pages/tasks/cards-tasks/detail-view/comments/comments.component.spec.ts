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
        {
          provide: DIALOG_DATA,
          useValue: {
            comments: [{ user: 'Kacper', comment: 'Hejka' }],
            itemID: '124587',
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create box of items', () => {
    const commentsBox = fixture.debugElement.nativeElement.querySelector(
      '.comments-section-content'
    );
    expect(commentsBox.children.length).toBeGreaterThan(0);
  });
  it('should create list of items', () => {
    const comment =
      fixture.debugElement.nativeElement.querySelectorAll('.comment');
    expect(comment.length).toBeGreaterThan(0);
  });
  it('should bind datat to comment card', () => {
    component.data = {
      comments: [{ user: 'Kacper', comment: 'Hejka' }],
      itemID: '124587',
    };
    fixture.detectChanges();
    const comment =
      fixture.debugElement.nativeElement.querySelector('.comment');
    expect(comment.querySelector('.comment-user').textContent).toBe('Kacper: ');
  });
});
