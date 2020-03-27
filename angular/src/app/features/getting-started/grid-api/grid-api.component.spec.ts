import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridApiComponent } from './grid-api.component';

describe('GridApiComponent', () => {
  let component: GridApiComponent;
  let fixture: ComponentFixture<GridApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
