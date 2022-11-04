import { DialogRef } from '@angular/cdk/dialog';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from '../../tasks.service';

import { DetailViewComponent } from './detail-view.component';

@Injectable()
class TaskServiceMock {
  deleteTask() {
    return true;
  }
}

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

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
    component.task = new Task({
      id: '1',
      name: 'adawdaw',
      description: 'string',
      deadline: '2022-12-29',
      comments: [{ user: 'string', comment: 'string' }],
      check: true,
      level: 'string',
      added: '1999-01-12',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render detailsView of Data', () => {
    component.task = new Task({
      id: '1',
      name: 'adawdaw',
      description: 'string',
      deadline: '2022-12-29',
      comments: [{ user: 'string', comment: 'string' }],
      check: true,
      level: 'string',
      added: '1999-01-12',
    });
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
    component.task = new Task({
      id: '1',
      name: 'adawdaw',
      description: 'string',
      deadline: '2022-12-29',
      comments: [{ user: 'string', comment: 'string' }],
      check: false,
      level: 'string',
      added: '1999-01-12',
    });
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
});
