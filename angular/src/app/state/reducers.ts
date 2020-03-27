import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import {
  CustomerState,
  customersFeatureKey,
  reducer
} from './customer.reducer';

export interface State {
  [customersFeatureKey]: CustomerState;
}

export const reducers: ActionReducerMap<State> = {
  [customersFeatureKey]: reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
