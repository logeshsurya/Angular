import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewAwardComponent } from './admin-view-award.component';

describe('AdminViewAwardComponent', () => {
  let component: AdminViewAwardComponent;
  let fixture: ComponentFixture<AdminViewAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
