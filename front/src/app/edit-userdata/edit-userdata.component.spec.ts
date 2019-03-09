import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserdataComponent } from './edit-userdata.component';

describe('EditUserdataComponent', () => {
  let component: EditUserdataComponent;
  let fixture: ComponentFixture<EditUserdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
