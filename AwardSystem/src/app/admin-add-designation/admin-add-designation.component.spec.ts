import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDesignationComponent } from './admin-add-designation.component';

describe('AdminAddDesignationComponent', () => {
  let component: AdminAddDesignationComponent;
  let fixture: ComponentFixture<AdminAddDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDesignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
