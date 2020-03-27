import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColDef, ColumnApi } from 'ag-grid-community';

import { customers } from '../../../../../data/data.json';

@Component({
  templateUrl: './moving.component.html',
  styleUrls: ['./moving.component.scss']
})
export class MovingComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   * lockPosition: Set to true to always have column displayed first.
   * supporessMovable: Set to true if you do not want this column to be movable via dragging.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name', lockPosition: true },
    { headerName: 'Catch Phrase', field: 'catchPhrase', suppressMovable: true },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' }
  ];

  /** Default column definition. */
  defaultColDef: ColDef = {
    editable: true,
    filter: 'agTextColumnFilter',
    sortable: true
  };

  /** The form control that specifies the index to move the columns to. */
  index = new FormControl('0');

  /**
   * Import customers from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number | object }> = customers;

  /** The ag-Grid Column API. */
  private columnApi: ColumnApi;

  onGridReady({ columnApi }: { columnApi: ColumnApi }) {
    this.columnApi = columnApi;
  }

  onMoveAddress(): void {
    this.columnApi.moveColumns(
      ['address.street1', 'address.city', 'address.state', 'address.zip'],
      this.index.value
    );
  }

  onMoveCatchPhrase(): void {
    this.columnApi.moveColumn('catchPhrase', this.index.value);
  }
}
