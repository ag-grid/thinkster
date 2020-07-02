import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRendererComponent } from './currency-renderer.component';

describe('CurrencyRendererComponent', () => {
  let component: CurrencyRendererComponent;
  let fixture: ComponentFixture<CurrencyRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
