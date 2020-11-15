import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import { Customer } from '../models/index';
import * as CustomerActions from './customer.actions';

export const customersFeatureKey = 'customers';

export interface CustomerState extends EntityState<Customer> {
  selectedId: number;
}

export const customerAdapter: EntityAdapter<Customer> = createEntityAdapter<
  Customer
>();

export const initialCustomerState: CustomerState = customerAdapter.getInitialState(
  {
    selectedId: null,
  }
);

const customerReducer = createReducer(
  initialCustomerState,
  on(CustomerActions.addCustomer, (state, action) =>
    customerAdapter.addOne(action.customer, state)
  ),
  on(CustomerActions.upsertCustomer, (state, action) =>
    customerAdapter.upsertOne(action.customer, state)
  ),
  on(CustomerActions.addCustomers, (state, action) =>
    customerAdapter.addMany(action.customers, state)
  ),
  on(CustomerActions.upsertCustomers, (state, action) =>
    customerAdapter.upsertMany(action.customers, state)
  ),
  on(CustomerActions.updateCustomer, (state, action) =>
    customerAdapter.updateOne(action.customer, state)
  ),
  on(CustomerActions.updateCustomers, (state, action) =>
    customerAdapter.updateMany(action.customers, state)
  ),
  on(CustomerActions.deleteCustomer, (state, action) =>
    customerAdapter.removeOne(action.id, state)
  ),
  on(CustomerActions.deleteCustomers, (state, action) =>
    customerAdapter.removeMany(action.ids, state)
  ),
  on(
    CustomerActions.fetchCustomersForDeltaRowDataSuccess,
    CustomerActions.fetchCustomersForImmutableDataSuccess,
    CustomerActions.paginateCustomersForAsyncGridSuccess,
    (state, action) => customerAdapter.addAll(action.customers, state)
  ),
  on(
    CustomerActions.sliceCustomersForInfiniteRowModelSuccess,
    (state, action) => customerAdapter.addMany(action.customers, state)
  ),
  on(CustomerActions.selectCustomer, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  on(CustomerActions.clearCustomers, (state) =>
    customerAdapter.removeAll(state)
  )
);

export function reducer(state: CustomerState | undefined, action: Action) {
  return customerReducer(state, action);
}
