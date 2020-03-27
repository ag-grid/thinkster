import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinningComponent } from './pinning.component';

describe('PinningComponent', () => {
  let component: PinningComponent;
  let fixture: ComponentFixture<PinningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
