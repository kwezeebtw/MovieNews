import { ComponentFixture, TestBed } from '@angular/core/testing';

import { peopleCardComponent } from './people-card.component';

describe('HeaderComponent', () => {
  let component: peopleCardComponent;
  let fixture: ComponentFixture<peopleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ peopleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(peopleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
