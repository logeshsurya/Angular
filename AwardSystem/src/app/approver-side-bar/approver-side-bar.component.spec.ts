import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproverSideBarComponent } from './approver-side-bar.component';

describe('ApproverSideBarComponent', () => {
  let component: ApproverSideBarComponent;
  let fixture: ComponentFixture<ApproverSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproverSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproverSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
