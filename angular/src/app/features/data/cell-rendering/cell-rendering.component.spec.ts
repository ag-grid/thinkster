import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRenderingComponent } from './cell-rendering.component';

describe('CellRenderingComponent', () => {
  let component: CellRenderingComponent;
  let fixture: ComponentFixture<CellRenderingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellRenderingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellRenderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
