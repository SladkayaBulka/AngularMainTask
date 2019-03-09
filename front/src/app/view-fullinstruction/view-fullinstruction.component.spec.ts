import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFullinstructionComponent } from './view-fullinstruction.component';

describe('ViewFullinstructionComponent', () => {
  let component: ViewFullinstructionComponent;
  let fixture: ComponentFixture<ViewFullinstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFullinstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFullinstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
