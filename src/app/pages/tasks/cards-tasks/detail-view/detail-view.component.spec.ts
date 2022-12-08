import { DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Comment, Task } from 'src/app/models/tasks.model';
import { TasksService } from '../../tasks.service';

import { DetailViewComponent } from './detail-view.component';

@Injectable()
class TaskServiceMock {
  deleteTask() {}
  checkTask(id: string) {}
  uncheckTask(id: string) {}
  addComment(comment: Comment[], id: string) {}
}

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;
  let service: TasksService;
  let task = new Task({
    id: '1',
    name: 'adawdaw',
    description: 'string',
    deadline: '2022-12-29',
    comments: [{ user: 'Adam', comment: 'Kowal' }],
    check: true,
    level: 'string',
    added: '1999-01-12',
    userId: '10',
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [DetailViewComponent],
      providers: [
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
        { provide: TasksService, useClass: TaskServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(TasksService);
    component.task = task;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render detailsView of Data', () => {
    component.task = task;
    fixture.detectChanges();
    const detail = fixture.nativeElement.querySelector('.detail');
    expect(detail.children.length).toBe(2);

    const headerDetail = detail.querySelector('.detail-header');
    expect(headerDetail.textContent.length).toBeGreaterThan(0);

    const discription = detail.querySelector('.detail-discription-content');
    expect(discription.children[0].textContent.length).toBeGreaterThan(0);

    const timeData = detail.querySelector('.detail-discription-more-time');
    expect(timeData.textContent.length).toBeGreaterThan(20);
  });
  it('should chcek Task', () => {
    component.task = new Task({
      id: '1',
      name: 'adawdaw',
      description: 'string',
      deadline: '2022-12-29',
      comments: [{ user: 'string', comment: 'string' }],
      check: true,
      level: 'string',
      added: '1999-01-12',
      userId: '10',
    });
    fixture.detectChanges();
    const buttonsDiv = fixture.nativeElement.querySelector(
      '.detail-discription-more-buttons'
    );
    const checkSpy = spyOn(component, 'checkTask');
    const buttons = buttonsDiv.querySelectorAll('.btn');
    const buttonCheck = buttons[1];
    buttonCheck.click();
    component.checkTask();
    expect(checkSpy).toHaveBeenCalled();
  });
  it('should unchcek Task', () => {
    component.task!.check = false;
    fixture.detectChanges();
    const buttonsDiv = fixture.nativeElement.querySelector(
      '.detail-discription-more-buttons'
    );
    const checkSpy = spyOn(component, 'uncheckTask');
    const buttons = buttonsDiv.querySelectorAll('.btn');
    const buttonCheck = buttons[1];
    buttonCheck.click();
    component.uncheckTask();
    expect(checkSpy).toHaveBeenCalled();
  });
  it('should call to delete', () => {
    const buttonsDiv = fixture.nativeElement.querySelector(
      '.detail-discription-more-buttons'
    );
    const deleteSpy = spyOn(component, 'deleteTask');
    const buttons = buttonsDiv.querySelectorAll('.btn');
    const buttonDelete = buttons[3];
    buttonDelete.click();
    component.deleteTask();
    expect(deleteSpy).toHaveBeenCalled();
  });
  it('should call to open edit dialog', () => {
    const buttonsDiv = fixture.nativeElement.querySelector(
      '.detail-discription-more-buttons'
    );
    const editSpy = spyOn(component, 'onOpenDialogEditTask');
    const buttons = buttonsDiv.querySelectorAll('.btn');
    const buttonEdit = buttons[2];
    buttonEdit.click();
    component.deleteTask();
    expect(editSpy).toHaveBeenCalled();
  });
  it('should call to open comments dialog', () => {
    const buttonsDiv = fixture.nativeElement.querySelector(
      '.detail-discription-more-buttons'
    );
    const commentSpy = spyOn(component, 'onOpenCommnentsDialog');
    const buttons = buttonsDiv.querySelectorAll('.btn');
    const buttonComments = buttons[0];
    buttonComments.click();
    component.onOpenCommnentsDialog();
    expect(commentSpy).toHaveBeenCalled();
  });
  it('should check render', () => {
    const title = fixture.nativeElement.querySelector('.detail-header');
    expect(title.textContent).toBe('adawdawLevel: string');
    const description = fixture.nativeElement.querySelector(
      '.detail-discription-content'
    );
    expect(description.textContent).toBe(' string ');
    const time = fixture.nativeElement.querySelector(
      '.detail-discription-more-time'
    );
    expect(time.textContent).toBe('Time to endDec 29, 2022');
  });
  it('should call to add commentForm', fakeAsync(() => {
    const addCommentSpy = spyOn(service, 'addComment');
    const buttons = fixture.nativeElement.querySelectorAll('.btn');
    const buttonComments = buttons[0];
    buttonComments.click();
    fixture.detectChanges();
    const dialogWindow = document.querySelector('app-comments');

    const comment = dialogWindow?.querySelector('textarea');
    comment!.value = ' some coment';
    comment?.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const btnSubmit = dialogWindow?.querySelector(
      'button[type=submit]'
    ) as HTMLButtonElement;
    btnSubmit.click();

    tick();
    expect(addCommentSpy).toHaveBeenCalled();
  }));
});
