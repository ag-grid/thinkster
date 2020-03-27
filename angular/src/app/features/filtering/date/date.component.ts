import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products
} from '../../../../../data/data.json';

@Component({
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {
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
      // comparator is necessary when the date column does not use a JS Date object
      // filterParams: {
      //   comparator: (filterLocalDateAtMidnight, cellValue) => {
      //     const date = new Date(cellValue);
      //     date.setHours(0, 0, 0, 0);
      //     console.log(filterLocalDateAtMidnight, date);
      //     if (date < filterLocalDateAtMidnight) {
      //       return -1;
      //     } else if (date > filterLocalDateAtMidnight) {
      //       return 1;
      //     } else {
      //       return 0;
      //     }
      //   }
      // },
      valueFormatter: ({ value }) => this.datePipe.transform(value, 'shortDate')
    },
    {
      headerName: 'Total',
      field: 'total',
      filter: 'agNumberColumnFilter',
      filterParams: {
        applyButton: true,
        clearButton: true
      }
    }
  ];

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   * dateOfOrder is a Date object with a hard coded time
   */
  rowData: Array<{ [key: string]: string | number | object }> = orders.map(
    order => ({
      ...order,
      // create Date object value for dateOfOrder field
      dateOfOrder: new Date(`${order.dateOfOrder.slice(0, 10)}T00:00:00.0`),
      account: accounts.find(account => account.id === order.accountId),
      customer: customers.find(customer => customer.id === order.customerId),
      orderItems: orderItems.filter(item => item.orderId === order.id),
      total: orderItems
        .filter(item => item.orderId === order.id)
        .map(item => products.find(product => product.id === item.productId))
        .reduce((prev, current) => prev + Number(current.price), 0)
    })
  );

  constructor(private readonly datePipe: DatePipe) {}
}
