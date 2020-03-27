import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssOverridesComponent } from './css-overrides.component';

describe('CssOverridesComponent', () => {
  let component: CssOverridesComponent;
  let fixture: ComponentFixture<CssOverridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssOverridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssOverridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
