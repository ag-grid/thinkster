import { UpdateNum } from '@ngrx/entity/src/models';
import { createAction, props } from '@ngrx/store';

import { Customer } from '../models';

/** fetch */
export const fetchCustomersForDeltaRowData = createAction(
  '[Customer/API] Fetch Customers for Delta Row Data'
);

export const fetchCustomersForDeltaRowDataFailure = createAction(
  '[Customer/API] FAILURE: Fetch Customers for Delta Row Data',
  props<{ error: Error }>()
);

export const fetchCustomersForDeltaRowDataSuccess = createAction(
  '[Customer/API] SUCCESS: Fetch Customers for Delta Row Data',
  props<{ customers: Customer[] }>()
);

export const fetchCustomersForImmutableData = createAction(
  '[Customer/API] Fetch Customers for Immutable Data'
);

export const fetchCustomersForImmutableDataFailure = createAction(
  '[Customer/API] FAILURE: Fetch Customers for Immutable Data',
  props<{ error: Error }>()
);

export const fetchCustomersForImmutableDataSuccess = createAction(
  '[Customer/API] SUCCESS: Fetch Customers for Immutable Data',
  props<{ customers: Customer[] }>()
);

/** paginate */
export const paginateCustomersForAsyncGrid = createAction(
  '[Customer/API] Paginate Customers for Async Grid',
  props<{ page: number; limit: number }>()
);

export const paginateCustomersForAsyncGridFailure = createAction(
  '[Customer/API] FAILURE: Paginate Customers for Async Grid',
  props<{ error: Error }>()
);

export const paginateCustomersForAsyncGridSuccess = createAction(
  '[Customer/API] SUCCESS: Paginate Customers for Async Grid',
  props<{ customers: Customer[] }>()
);

/** slice */
export const sliceCustomersForInfiniteRowModel = createAction(
  '[Customer/API] Slice Customers for Infinite Row Model',
  props<{ start: number; end: number }>()
);

export const sliceCustomersForInfiniteRowModelFailure = createAction(
  '[Customer/API] FAILURE: Slice Customers for Infinite Row Model',
  props<{ error: Error }>()
);

export const sliceCustomersForInfiniteRowModelSuccess = createAction(
  '[Customer/API] SUCCESS: Slice Customers for Infinite Row Model',
  props<{ customers: Customer[] }>()
);

/** add */
export const addCustomer = createAction(
  '[Customer/API] Add Customer',
  props<{ customer: Customer }>()
);

export const addCustomers = createAction(
  '[Customer/API] Add Customers',
  props<{ customers: Customer[] }>()
);

/** upsert */
export const upsertCustomer = createAction(
  '[Customer/API] Upsert Customer',
  props<{ customer: Customer }>()
);

export const upsertCustomers = createAction(
  '[Customer/API] Upsert Customers',
  props<{ customers: Customer[] }>()
);

/** update */
export const updateCustomer = createAction(
  '[Customer/API] Update Customer',
  props<{ customer: UpdateNum<Customer> }>()
);

export const updateCustomers = createAction(
  '[Customer/API] Update Customers',
  props<{ customers: UpdateNum<Customer>[] }>()
);

/** delete */
export const deleteCustomer = createAction(
  '[Customer/API] Delete Customer',
  props<{ id: number }>()
);

export const deleteCustomers = createAction(
  '[Customer/API] Delete Customers',
  props<{ ids: number[] }>()
);

/** select */
export const selectCustomer = createAction(
  '[Customer/API] Select Customer',
  props<{ id: number }>()
);

/** clear */
export const clearCustomers = createAction('[Customer/API] Clear Customers');
