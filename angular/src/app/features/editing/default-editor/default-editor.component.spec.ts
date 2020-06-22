import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultEditorComponent } from './default-editor.component';

describe('DefaultEditorComponent', () => {
  let component: DefaultEditorComponent;
  let fixture: ComponentFixture<DefaultEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
