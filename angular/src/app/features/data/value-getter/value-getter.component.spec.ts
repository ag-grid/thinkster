import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueGetterComponent } from './value-getter.component';

describe('ValueGetterComponent', () => {
  let component: ValueGetterComponent;
  let fixture: ComponentFixture<ValueGetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueGetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueGetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
