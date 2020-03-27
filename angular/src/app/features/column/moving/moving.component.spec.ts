import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingComponent } from './moving.component';

describe('MovingComponent', () => {
  let component: MovingComponent;
  let fixture: ComponentFixture<MovingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
