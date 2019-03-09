import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStepsComponent } from './create-steps.component';

describe('CreateStepsComponent', () => {
  let component: CreateStepsComponent;
  let fixture: ComponentFixture<CreateStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
