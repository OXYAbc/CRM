import { DialogRef } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Task } from 'src/app/models/tasks.model';

import { DetailViewComponent } from './detail-view.component';

describe('DetailViewComponent', () => {
  let component: DetailViewComponent;
  let fixture: ComponentFixture<DetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [DetailViewComponent],
      providers: [
        { provide: DialogRef, useValue: { close: (dialogResult: any) => {} } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailViewComponent);
    component = fixture.componentInstance;
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
        added: '1999-01-12'
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
});
