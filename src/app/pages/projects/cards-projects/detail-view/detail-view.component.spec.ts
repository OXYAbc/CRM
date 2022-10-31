import { DialogRef } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { Project } from 'src/app/models/projects.model';

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
    component.project = new Project({id: '1',
    people: ['Kacper Jan'],
    name: 'Name',
    description: 'discription',
    level: 'low',
    time: '2022-12-29',
    tasks: [{title: "title", description: "string", score: 0, stage: "toDo"}]})
    ;
    fixture.detectChanges();
    const detail = fixture.nativeElement.querySelector('.detail');
    expect(detail.children.length).toBe(2);

    const headerDetail = detail.querySelector('.detail-header');
    expect(headerDetail.textContent.length).toBeGreaterThan(0);

  });
});
