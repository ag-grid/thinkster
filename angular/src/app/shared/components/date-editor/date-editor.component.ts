import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams } from 'ag-grid-community';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './date-editor.component.html',
  styleUrls: ['./date-editor.component.scss'],
})
export class DateEditorComponent
  implements AfterViewInit, ICellEditorAngularComp, OnDestroy, OnInit {
  /** The form control for the datepicker input. */
  dateControl = new FormControl('');

  /** The Material datepicker component. */
  @ViewChild(MatDatepicker, { static: true })
  datepicker: MatDatepicker<Date>;

  /** The cell editor parameters. */
  private params: ICellEditorParams;

  /** RxJS Subscription. */
  private subscription: Subscription;

  /** The datepicker value. */
  private value: Date;

  agInit(params: ICellEditorParams): void {
    this.params = params;
    this.dateControl.setValue(params.value, { emitEvent: false });
  }

  ngAfterViewInit(): void {
    this.datepicker.open();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.dateControl.valueChanges.subscribe({
      error: console.error,
      next: (value) => {
        this.value = value;
        this.params.stopEditing();
      },
    });
  }

  getValue(): any {
    return this.value;
  }

  isPopup(): boolean {
    return false;
  }
}
