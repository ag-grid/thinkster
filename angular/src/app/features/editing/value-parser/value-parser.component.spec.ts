import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueParserComponent } from './value-parser.component';

describe('ValueParserComponent', () => {
  let component: ValueParserComponent;
  let fixture: ComponentFixture<ValueParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
