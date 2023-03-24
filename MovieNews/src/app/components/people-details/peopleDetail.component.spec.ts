import { ComponentFixture, TestBed } from '@angular/core/testing';

import { peopleDetailComponent } from './peopleDetail.component';

describe('HeaderComponent', () => {
  let component: peopleDetailComponent;
  let fixture: ComponentFixture<peopleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ peopleDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(peopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
