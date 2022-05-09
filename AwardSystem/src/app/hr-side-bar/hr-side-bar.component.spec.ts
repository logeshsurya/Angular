import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSideBarComponent } from './hr-side-bar.component';

describe('HrSideBarComponent', () => {
  let component: HrSideBarComponent;
  let fixture: ComponentFixture<HrSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
