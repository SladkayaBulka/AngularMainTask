import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstructionComponent } from './edit-instruction.component';

describe('EditInstructionComponent', () => {
  let component: EditInstructionComponent;
  let fixture: ComponentFixture<EditInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
