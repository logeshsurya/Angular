import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAddRequestComponent } from './request-add-request.component';

describe('RequestAddRequestComponent', () => {
  let component: RequestAddRequestComponent;
  let fixture: ComponentFixture<RequestAddRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestAddRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAddRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
