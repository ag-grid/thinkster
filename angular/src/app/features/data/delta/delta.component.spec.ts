import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { DeltaComponent } from './delta.component';

describe('DeltaComponent', () => {
  let component: DeltaComponent;
  let fixture: ComponentFixture<DeltaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeltaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
