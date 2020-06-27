import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingDataComponent } from './saving-data.component';

describe('SavingDataComponent', () => {
  let component: SavingDataComponent;
  let fixture: ComponentFixture<SavingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
