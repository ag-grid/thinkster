import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

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
   * lockPosition: Set to true to always have column displayed first.
   * resizable: Set to true to allow column to be resized.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      pinned: 'left'
    },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip', width: 120, pinned: 'right' }
  ];

  /** Default column definition. */
  defaultColDef: ColDef = {
    editable: true,
    filter: 'agTextColumnFilter',
    resizable: true,
    sortable: true
  };

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;
}
