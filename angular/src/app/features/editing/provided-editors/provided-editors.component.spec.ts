import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidedEditorsComponent } from './provided-editors.component';

describe('ProvidedEditorsComponent', () => {
  let component: ProvidedEditorsComponent;
  let fixture: ComponentFixture<ProvidedEditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidedEditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidedEditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
