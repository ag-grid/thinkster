import * as fromCustomer from './customer.reducer';
import { selectCustomerState } from './customer.selectors';

describe('Customer Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCustomerState({
      [fromCustomer.customerFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
