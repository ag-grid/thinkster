import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanningComponent } from './spanning.component';

describe('SpanningComponent', () => {
  let component: SpanningComponent;
  let fixture: ComponentFixture<SpanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
