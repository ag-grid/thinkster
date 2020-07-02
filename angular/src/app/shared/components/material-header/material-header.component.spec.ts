import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialHeaderComponent } from './material-header.component';

describe('MaterialHeaderComponent', () => {
  let component: MaterialHeaderComponent;
  let fixture: ComponentFixture<MaterialHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
