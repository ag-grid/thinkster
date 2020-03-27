import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';

import { products } from '../../../../../data/data.json';

@Component({
  templateUrl: './row-selection.component.html',
  styleUrls: ['./row-selection.component.scss']
})
export class RowSelectionComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   * filter:
   *   agNumberColumnFilter - number filter
   *   boolean - default filter is the agTextColumnFilter in community edition
   * checkboxSelection: Set to true (or return true from function) to render a selection checkbox in the column.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    { headerName: 'Color', field: 'color', filter: true },
    { headerName: 'Details', field: 'details', filter: 'agTextColumnFilter' }
  ];

  /**
   * Import products from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number }> = products.map(
    ({ name, price, color, details }) => ({
      name,
      price: Number(price),
      color,
      details
    })
  );

  /** A comma-separated list of selected products by name. */
  selection = new BehaviorSubject<string>('');

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  onGridReady({ api }) {
    this.gridApi = api;
  }

  onSelectionChanged(): void {
    const selectedProductNames = this.gridApi
      .getSelectedRows()
      .map(row => row.name)
      .join(', ');
    this.selection.next(selectedProductNames);
  }
}
