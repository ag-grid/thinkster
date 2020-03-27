import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products
} from '../../../../../data/data.json';

@Component({
  templateUrl: './height.component.html',
  styleUrls: ['./height.component.scss']
})
export class HeightComponent {
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
      filter: 'agTextColumnFilter'
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      filter: 'agNumberColumnFilter'
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      filter: 'agDateColumnFilter',
      valueFormatter: ({ value }) => this.datePipe.transform(value, 'shortDate')
    },
    {
      headerName: 'Products',
      field: 'productList'
      // enable auto height
      // cellClass: 'cell-wrap-text',
      // autoHeight: true
    },
    {
      headerName: 'Total',
      field: 'total',
      filter: 'agNumberColumnFilter',
      valueFormatter: ({ value }) => this.currencyPipe.transform(String(value))
    }
  ];

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   * dateOfOrder is a Date object with a hard coded time
   */
  rowData: Array<{ [key: string]: string | number | object }> = orders.map(
    order => ({
      ...order,
      dateOfOrder: new Date(`${order.dateOfOrder.slice(0, 10)}T00:00:00.0`),
      account: accounts.find(account => account.id === order.accountId),
      customer: customers.find(customer => customer.id === order.customerId),
      orderItems: orderItems.filter(item => item.orderId === order.id),
      productList: orderItems
        .filter(item => item.orderId === order.id)
        .map(item => products.find(product => product.id === item.productId))
        .map(product => product.name)
        .join(', '),
      total: orderItems
        .filter(item => item.orderId === order.id)
        .map(item => products.find(product => product.id === item.productId))
        .reduce((prev, current) => prev + Number(current.price), 0)
    })
  );

  constructor(
    private readonly currencyPipe: CurrencyPipe,
    private readonly datePipe: DatePipe
  ) {}

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }

  // getRowHeight({ data }: { data: { [key: string]: any } }): number {
  //   if (data.total > 2000) {
  //     return 50;
  //   }
  //   return 25;
  // }
}
