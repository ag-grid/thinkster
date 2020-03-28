import { ColDef } from 'ag-grid-community';

import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products
} from '../../../../../data/data.json';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent {
  /**
   * The column definitions is an array of ColDef objects.
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
      headerName: 'Total',
      field: 'total',
      filter: 'agNumberColumnFilter',
      valueFormatter: ({ value }) => this.currencyPipe.transform(String(value)),
      editable: true
    }
  ];

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   * dateOfOrder is a Date object with a hard coded time
   */
  rowData: Array<{
    [key: string]: boolean | string | number | object;
  }> = orders.map(order => ({
    ...order,
    dateOfOrder: new Date(`${order.dateOfOrder.slice(0, 10)}T00:00:00.0`),
    account: accounts.find(account => account.id === order.accountId),
    customer: customers.find(customer => customer.id === order.customerId),
    orderItems: orderItems.filter(item => item.orderId === order.id),
    total: orderItems
      .filter(item => item.orderId === order.id)
      .map(item => products.find(product => product.id === item.productId))
      .reduce((prev, current) => prev + Number(current.price), 0)
  }));

  constructor(
    private readonly currencyPipe: CurrencyPipe,
    private readonly datePipe: DatePipe
  ) {}
}
