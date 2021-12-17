import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutApiComponent } from './about-api.component';

describe('AboutApiComponent', () => {
  let component: AboutApiComponent;
  let fixture: ComponentFixture<AboutApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
