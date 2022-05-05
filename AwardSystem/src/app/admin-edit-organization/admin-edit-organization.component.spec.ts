import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditOrganizationComponent } from './admin-edit-organization.component';

describe('AdminEditOrganizationComponent', () => {
  let component: AdminEditOrganizationComponent;
  let fixture: ComponentFixture<AdminEditOrganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditOrganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
