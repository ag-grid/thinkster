import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnApiComponent } from './column-api.component';

describe('ColumnApiComponent', () => {
  let component: ColumnApiComponent;
  let fixture: ComponentFixture<ColumnApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
