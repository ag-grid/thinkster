import { initialCustomerState, reducer } from './customer.reducer';

describe('Customer Reducer', () => {
  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialCustomerState, action);

      expect(result).toBe(initialCustomerState);
    });
  });
});
