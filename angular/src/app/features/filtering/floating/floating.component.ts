import { ColDef, GridApi } from 'ag-grid-community';

import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

import {
  accounts,
  customers,
  orderItems,
  orders,
  products
} from '../../../../../data/data.json';

@Component({
  selector: 'app-floating',
  templateUrl: './floating.component.html',
  styleUrls: ['./floating.component.scss']
})
export class FloatingComponent {
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
      valueFormatter: ({ value }) =>
        this.datePipe.transform(value, 'shortDate'),
      filter: 'agDateColumnFilter',
      filterParams: {
        comparator: (filterLocalDateAtMidnight, cellValue) => {
          const date = new Date(cellValue);
          date.setHours(0, 0, 0, 0);
          if (date < filterLocalDateAtMidnight) {
            return -1;
          } else if (date > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        }
      }
    },
    {
      headerName: 'Total',
      field: 'total',
      filter: false
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
      // dateOfOrder: new Date(`${order.dateOfOrder.slice(0, 10)}T00:00:00.0`),
      dateOfOrder: order.dateOfOrder,
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
