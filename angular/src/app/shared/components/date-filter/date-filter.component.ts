import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AgFrameworkComponent } from 'ag-grid-angular';
import {
  DateFilter,
  DateFilterModel,
  IFloatingFilter,
  IFloatingFilterParams,
} from 'ag-grid-community';
import { format, formatISO, parse } from 'date-fns';
import { Subscription } from 'rxjs';

export interface DateFilterParams extends IFloatingFilterParams {
  inputDisabled?: boolean;
}

@Component({
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
})
export class DateFilterComponent
  implements
    IFloatingFilter,
    AgFrameworkComponent<DateFilterParams>,
    OnDestroy,
    OnInit {
  /** The form control for the datepicker input. */
  dateControl = new FormControl('');

  /** Boolean indicating if the input is disabled. */
  inputDisabled = false;

  /** The date filter parameters. */
  private params: DateFilterParams;

  /** RxJS Subscription. */
  private subscription: Subscription;

  agInit(params: DateFilterParams): void {
    this.params = params;
    if (params.hasOwnProperty('inputDisabled')) {
      this.inputDisabled = params.inputDisabled;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.dateControl.valueChanges.subscribe({
      error: console.error,
      next: (date: Date) =>
        this.params.parentFilterInstance((instance: DateFilter) =>
          instance.onFloatingFilterChanged(
            'equals',
            date ? format(date, 'yyyy-MM-dd') : null
          )
        ),
    });
  }

  onParentModelChanged(parentModel: DateFilterModel): void {
    if (parentModel) {
      const date = parse(
        parentModel.dateFrom,
        'yyyy-MM-dd HH:mm:ss',
        new Date()
      );
      this.dateControl.setValue(formatISO(date), {
        emitEvent: false,
      });
    } else {
      this.dateControl.setValue('');
    }
  }
}
