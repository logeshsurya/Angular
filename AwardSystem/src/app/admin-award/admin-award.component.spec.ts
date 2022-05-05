import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAwardComponent } from './admin-award.component';

describe('AdminAwardComponent', () => {
  let component: AdminAwardComponent;
  let fixture: ComponentFixture<AdminAwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAwardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
