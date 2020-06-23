import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSetterComponent } from './value-setter.component';

describe('ValueSetterComponent', () => {
  let component: ValueSetterComponent;
  let fixture: ComponentFixture<ValueSetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueSetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueSetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
