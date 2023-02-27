import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerieImgComponent } from './gallerie-img.component';

describe('GallerieImgComponent', () => {
  let component: GallerieImgComponent;
  let fixture: ComponentFixture<GallerieImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerieImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerieImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
