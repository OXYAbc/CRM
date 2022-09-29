import { DialogRef } from '@angular/cdk/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { ControlComponentComponent } from './control-component.component';

describe('ControlComponentComponent', () => {
  let component: ControlComponentComponent;
  let fixture: ComponentFixture<ControlComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlComponentComponent ],
      imports: [AppModule],
      providers:[
        { provide: DialogRef },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
