import { DialogRef } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

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
    component.detailData = {
      id: '1',
      name: 'adawdaw',
      discription: 'string',
      deadline: '2022-12-31',
      comments: [{ user: 'string', comments: ['string'] }],
      check: true,
      level: 'string',
    };
    fixture.detectChanges();
    const detail = fixture.nativeElement.querySelector('.detail');
    expect(detail.children.length).toBe(2);

    const headerDetail = detail.querySelector('.headerDetailData');
    expect(headerDetail.textContent.length).toBeGreaterThan(0);

    const discription = detail.querySelector('.discription');
    expect(discription.children[0].textContent.length).toBeGreaterThan(0);

    const timeData = detail.querySelector('.timeOfTask');
    expect(timeData.textContent.length).toBeGreaterThan(20);
  });
});
