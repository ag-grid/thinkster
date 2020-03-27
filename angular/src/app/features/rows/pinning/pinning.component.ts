import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { Subject } from 'rxjs';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './pinning.component.html',
  styleUrls: ['./pinning.component.scss']
})
export class PinningComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', checkboxSelection: true },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' }
  ];

  /**
   * The pinned row data.
   */
  pinnedTopRowData = new Subject<
    Array<{ [key: string]: string | number | object }>
  >();

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;

  /** The Grid API. */
  private gridApi: GridApi;

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;
    api.sizeColumnsToFit();
  }

  onSelectionChanged(): void {
    const selectedRows = this.gridApi.getSelectedRows();

    // we can leverage RxJS, or
    this.pinnedTopRowData.next(selectedRows);

    // we can directly update the pinnedTopRowData or the pinnedBottomRowData
    this.gridApi.setPinnedBottomRowData(selectedRows);
  }
}
