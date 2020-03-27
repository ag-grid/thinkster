import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
  CustomerState,
  customerAdapter,
  customersFeatureKey
} from './customer.reducer';

export const selectCustomerState = createFeatureSelector<CustomerState>(
  customersFeatureKey
);

export const {
  selectIds: selectCustomerIds,
  selectEntities: selectCustomerEntities,
  selectAll: selectAllCustomers,
  selectTotal: selectTotalCustomers
} = customerAdapter.getSelectors(selectCustomerState);

export const selectedCustomerId = createSelector(
  selectCustomerState,
  state => state.selectedId
);

export const selectedCustomer = createSelector(
  selectCustomerEntities,
  selectedCustomerId,
  (entities, id) => entities && entities[id]
);
