import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

import { products } from '../../../../../data/data.json';

@Component({
  templateUrl: './grid-api.component.html',
  styleUrls: ['./grid-api.component.scss'],
})
export class GridApiComponent {
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
    },
    {
      headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: 'agNumberColumnFilter',
    },
    { headerName: 'Color', field: 'color', filter: true },
    { headerName: 'Details', field: 'details', filter: 'agTextColumnFilter' },
  ];

  /**
   * Import products from /data/data.json file
   */
  rowData: Array<{ [key: string]: string | number }> = products.map(
    ({ name, price, color, details }) => ({
      name,
      price: Number(price),
      color,
      details,
    })
  );

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  onDeselectAll(): void {
    this.gridApi.deselectAll();
  }

  onExportToCsv(): void {
    this.gridApi.exportDataAsCsv();
  }

  onGridReady({ api }) {
    // get reference to the Grid API
    this.gridApi = api;

    // size the columns to fit in the grid
    this.gridApi.sizeColumnsToFit();
  }

  onSelectAll(): void {
    this.gridApi.selectAll();
  }

  onSortByNameAndPrice(sort: 'asc' | 'desc'): void {
    this.gridApi.setSortModel([
      {
        colId: 'name',
        sort,
      },
      {
        colId: 'price',
        sort,
      },
    ]);
  }
}
