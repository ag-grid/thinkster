import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CustomerEffects } from './customer.effects';

describe('CustomerEffects', () => {
  let actions$: Observable<any>;
  let effects: CustomerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get<CustomerEffects>(CustomerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
