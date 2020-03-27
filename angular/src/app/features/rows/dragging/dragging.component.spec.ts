import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggingComponent } from './dragging.component';

describe('DraggingComponent', () => {
  let component: DraggingComponent;
  let fixture: ComponentFixture<DraggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
