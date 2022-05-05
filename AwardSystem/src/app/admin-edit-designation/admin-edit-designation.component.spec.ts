import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditDesignationComponent } from './admin-edit-designation.component';

describe('AdminEditDesignationComponent', () => {
  let component: AdminEditDesignationComponent;
  let fixture: ComponentFixture<AdminEditDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditDesignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
