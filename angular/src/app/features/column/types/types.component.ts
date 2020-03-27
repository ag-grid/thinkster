import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { accounts, customers, orders } from '../../../../../data/data.json';

@Component({
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Customer Name',
      field: 'customer.name',
      type: 'nonEditableColumn'
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      type: 'nonEditableColumn'
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      type: ['nonEditableColumn', 'dateColumn'],
      valueFormatter: ({ value }) => this.datePipe.transform(value, 'short')
    }
  ];

  /** Define column types */
  columnTypes: { [key: string]: ColDef } = {
    nonEditableColumn: { editable: false },
    dateColumn: {
      filter: 'agDateColumnFilter',
      suppressMenu: true
    }
  };

  /** Default column definition. */
  defaultColDef: ColDef = {
    filter: 'agTextColumnFilter',
    sortable: true
  };

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   */
  rowData: Array<{ [key: string]: string | number | object }> = orders.map(
    order => ({
      ...order,
      account: accounts.find(account => account.id === order.accountId),
      customer: customers.find(customer => customer.id === order.customerId)
    })
  );

  constructor(private readonly datePipe: DatePipe) {}
}
