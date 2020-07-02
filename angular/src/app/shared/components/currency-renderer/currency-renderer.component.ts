import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  templateUrl: './currency-renderer.component.html',
  styleUrls: ['./currency-renderer.component.scss'],
})
export class CurrencyRendererComponent implements ICellRendererAngularComp {
  /** The cell value. */
  value: any;

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    // return false to let ag-grid refresh the component via destroying and creating it
    this.value = params.value;
    return true;
  }
}
