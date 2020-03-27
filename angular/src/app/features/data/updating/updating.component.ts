import { Component, OnDestroy } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { BehaviorSubject, Observable, Subject, interval } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './updating.component.html',
  styleUrls: ['./updating.component.scss']
})
export class UpdatingComponent implements OnDestroy {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * valueGetter: Function or expression. Gets the value from your data for display.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Random Int', field: 'random' },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' }
  ];

  /**
   * Import customers from /data/data.json file
   */
  rowData = new BehaviorSubject(
    customers.map(customer => ({
      ...customer,
      random: Math.round(Math.random() * 100)
    }))
  );

  /** Unsubscribe from observables when the component is destroyed. */
  private destroy = new Subject();

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }

  onAddRow(): void {
    this.gridApi.updateRowData({
      add: [
        {
          name: 'ag-Grid',
          catchPhrase: 'The Best JavaScript Grid in the World',
          address: {
            street1: '6 Borough High Street',
            city: 'London',
            state: '',
            zip: 'SE1 9QQ'
          }
        }
      ]
    });
  }

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;
    api.sizeColumnsToFit();
  }

  onRemoveSelectedRows(): void {
    const selectedRows = this.gridApi.getSelectedRows();
    this.gridApi.updateRowData({
      remove: selectedRows
    });
  }

  onSetRowData(): void {
    // set random data into the grid, overwriting the previous data in the grid.
    const randomCustomers = customers
      .map(customer => ({
        ...customer,
        random: Math.round(Math.random() * 100)
      }))
      .filter(() => Math.round(Math.random() * 10) < 5);
    this.rowData.next(randomCustomers);
  }

  onUpdateRowData(): void {
    interval(500)
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        const updates = [];
        this.gridApi.forEachNodeAfterFilterAndSort(({ data }) => {
          data.random = Math.round(Math.random() * 100);
          updates.push(data);
        });
        this.gridApi.updateRowData({ update: updates });
      });
  }
}
