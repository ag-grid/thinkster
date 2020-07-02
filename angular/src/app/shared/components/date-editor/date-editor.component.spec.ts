import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateEditorComponent } from './date-editor.component';

describe('DateEditorComponent', () => {
  let component: DateEditorComponent;
  let fixture: ComponentFixture<DateEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
