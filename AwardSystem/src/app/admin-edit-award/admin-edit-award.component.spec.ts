import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditAwardComponent } from './admin-edit-award.component';

describe('AdminEditAwardComponent', () => {
  let component: AdminEditAwardComponent;
  let fixture: ComponentFixture<AdminEditAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
