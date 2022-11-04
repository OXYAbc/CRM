import { DialogRef } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { CommentFormComponent } from './comment-form.component';
import { CommentFormModule } from './comment-form.module';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentFormModule],
      declarations: [CommentFormComponent],
      providers: [
        { provide: FormBuilder },
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form invalid when empty', () => {
    expect(component.commentForm.valid).toBeFalsy();
  });
  it('comment field validity', () => {
    let comment = component.commentForm.controls['comment'];
    expect(comment.valid).toBeFalsy();
  });
  it('comment field validity', () => {
    let errors = {};
    let comment = component.commentForm.controls['comment'];
    comment.setValue('test');
    fixture.detectChanges();
    errors = comment.errors || {};
    expect(errors).toBeTruthy();
  });
  it('submitting a form emits a task', () => {
    expect(component.commentForm.valid).toBeFalsy();
    const submitBtn = fixture.nativeElement.querySelector('button[type=submit]');
    component.commentForm.controls['comment'].setValue('komentarz');
    fixture.detectChanges();
    const submitSpy = spyOn(component, 'onSubmit');
    expect(component.commentForm.valid).toBeTruthy();
    submitBtn.click();
    expect(submitSpy).toHaveBeenCalled();
  });
  it('call to close dialog', ()=>{
    const cancelSpy = spyOn(component, 'closeDialog');
    const btns = fixture.nativeElement.querySelectorAll(".btn");
    const btnCancel = btns[1];
    btnCancel.click();
    expect(cancelSpy).toHaveBeenCalled()
  })
});
