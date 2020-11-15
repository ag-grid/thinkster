import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { CustomerService } from '../services';
import {
  fetchCustomersForDeltaRowData,
  fetchCustomersForDeltaRowDataFailure,
  fetchCustomersForDeltaRowDataSuccess,
  fetchCustomersForImmutableData,
  fetchCustomersForImmutableDataFailure,
  fetchCustomersForImmutableDataSuccess,
  paginateCustomersForAsyncGrid,
  paginateCustomersForAsyncGridFailure,
  paginateCustomersForAsyncGridSuccess,
  sliceCustomersForInfiniteRowModel,
  sliceCustomersForInfiniteRowModelFailure,
  sliceCustomersForInfiniteRowModelSuccess,
} from './customer.actions';

@Injectable()
export class CustomerEffects {
  fetchCustomersForDeltaRowData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCustomersForDeltaRowData),
      exhaustMap(() =>
        this.customerService.fetch().pipe(
          map((customers) =>
            fetchCustomersForDeltaRowDataSuccess({ customers })
          ),
          catchError((error) => of(fetchCustomersForDeltaRowDataFailure(error)))
        )
      )
    )
  );

  fetchCustomersForImmutableData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCustomersForImmutableData),
      exhaustMap(() =>
        this.customerService.fetch().pipe(
          map((customers) =>
            fetchCustomersForImmutableDataSuccess({ customers })
          ),
          catchError((error) =>
            of(fetchCustomersForImmutableDataFailure(error))
          )
        )
      )
    )
  );

  paginateCustomersForAsyncGrid$ = createEffect(() =>
    this.actions$.pipe(
      ofType(paginateCustomersForAsyncGrid),
      exhaustMap(({ page, limit }) =>
        this.customerService.paginate(page, limit).pipe(
          map((customers) =>
            paginateCustomersForAsyncGridSuccess({ customers })
          ),
          catchError((error) => of(paginateCustomersForAsyncGridFailure(error)))
        )
      )
    )
  );

  sliceCustomersForInfiniteRowModel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(sliceCustomersForInfiniteRowModel),
      exhaustMap(({ start, end }) =>
        this.customerService.slice(start, end).pipe(
          map((customers) =>
            sliceCustomersForInfiniteRowModelSuccess(customers)
          ),
          catchError((error) =>
            of(sliceCustomersForInfiniteRowModelFailure(error))
          )
        )
      )
    )
  );

  // updateCustomer$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(updateCustomer),
  //       exhaustMap(({ customer: { id, changes } }) =>
  //         this.customerService.update(id, changes)
  //       )
  //     ),
  //   { dispatch: false }
  // );

  constructor(
    private readonly actions$: Actions,
    private readonly customerService: CustomerService
  ) {}
}
