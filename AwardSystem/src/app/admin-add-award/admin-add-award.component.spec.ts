import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddAwardComponent } from './admin-add-award.component';

describe('AdminAddAwardComponent', () => {
  let component: AdminAddAwardComponent;
  let fixture: ComponentFixture<AdminAddAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
