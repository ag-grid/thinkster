import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { SliderFilterComponent } from './slider-filter.component';

describe('SliderFilterComponent', () => {
  let component: SliderFilterComponent;
  let fixture: ComponentFixture<SliderFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SliderFilterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
