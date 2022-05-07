import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestMyawardComponent } from './request-myaward.component';

describe('RequestMyawardComponent', () => {
  let component: RequestMyawardComponent;
  let fixture: ComponentFixture<RequestMyawardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestMyawardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestMyawardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
