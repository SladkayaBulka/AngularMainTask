import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstructionComponent } from './create-instruction.component';

describe('CreateInstructionComponent', () => {
  let component: CreateInstructionComponent;
  let fixture: ComponentFixture<CreateInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
