import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products,
} from '../../../../../data/data.json';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent {
  /**
   * The column definitions is an array of ColDef objects.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Customer Name',
      field: 'customer.name',
      checkboxSelection: true,
      headerCheckboxSelection: true,
      headerCheckboxSelectionFilteredOnly: true,
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      valueFormatter: ({ value }) =>
        this.datePipe.transform(value, 'shortDate'),
    },
    {
      headerName: 'Total',
      field: 'total',
      valueFormatter: ({ value }) => this.currencyPipe.transform(String(value)),
    },
  ];

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   * dateOfOrder is a Date object with a hard coded time
   */
  rowData: Array<{
    [key: string]: boolean | string | number | object;
  }> = orders.map((order) => ({
    ...order,
    dateOfOrder: new Date(`${order.dateOfOrder.slice(0, 10)}T00:00:00.0`),
    account: accounts.find((account) => account.id === order.accountId),
    customer: customers.find((customer) => customer.id === order.customerId),
    orderItems: orderItems.filter((item) => item.orderId === order.id),
    total: orderItems
      .filter((item) => item.orderId === order.id)
      .map((item) => products.find((product) => product.id === item.productId))
      .reduce((prev, current) => prev + Number(current.price), 0),
  }));

  /** A comma-separated list of selected products by name. */
  total = new BehaviorSubject<number>(0);

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  onGridReady({ api }) {
    this.gridApi = api;
  }

  onSelectionChanged(): void {
    const total = this.gridApi
      .getSelectedRows()
      .map((row) => row.total)
      .reduce((prev, total) => prev + total, 0);
    this.total.next(total);
  }

  constructor(
    private readonly currencyPipe: CurrencyPipe,
    private readonly datePipe: DatePipe
  ) {}
}
