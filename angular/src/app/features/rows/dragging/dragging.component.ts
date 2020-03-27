import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './dragging.component.html',
  styleUrls: ['./dragging.component.scss']
})
export class DraggingComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', rowDrag: true },
    {
      headerName: 'Catch Phrase',
      field: 'catchPhrase'
    },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' }
  ];

  /** Default column definition. */
  defaultColDef: ColDef = {
    sortable: true
  };

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;

  /** The grid API. */
  gridApi: GridApi;

  /** Toggle the row dragging suppression. */
  suppressRowDrag = false;

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;
    api.sizeColumnsToFit();
  }

  onToggleSuppressRowDrag(): void {
    this.suppressRowDrag = !this.suppressRowDrag;
    this.gridApi.setSuppressRowDrag(this.suppressRowDrag);
  }
}
