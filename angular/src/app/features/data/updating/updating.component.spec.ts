import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatingComponent } from './updating.component';

describe('UpdatingComponent', () => {
  let component: UpdatingComponent;
  let fixture: ComponentFixture<UpdatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
