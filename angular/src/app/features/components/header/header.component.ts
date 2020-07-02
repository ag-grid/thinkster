import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products,
} from '../../../../../data/data.json';
import {
  CurrencyRendererComponent,
  MaterialHeaderComponent,
} from '../../../shared/components';

@Component({
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * The column definitions is an array of ColDef objects.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Customer Name',
      field: 'customer.name',
      filter: false,
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      filter: false,
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      valueFormatter: ({ value }) =>
        formatDate(value, 'yyyy/MM/dd', this.locale),
    },
    {
      headerName: 'Total',
      field: 'total',
      editable: true,
      cellRenderer: 'currencyRenderer',
    },
  ];

  /** Default column definition. */
  defaultColDef: ColDef = {
    sortable: true,
  };

  /** The custom framework components registered by name. */
  frameworkComponents = {
    agColumnHeader: MaterialHeaderComponent,
    currencyRenderer: CurrencyRendererComponent,
  };

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

  constructor(@Inject(LOCALE_ID) protected readonly locale: string) {}
}
