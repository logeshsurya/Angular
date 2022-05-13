import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableDesignationComponent } from './disable-designation.component';

describe('DisableDesignationComponent', () => {
  let component: DisableDesignationComponent;
  let fixture: ComponentFixture<DisableDesignationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableDesignationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableDesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
