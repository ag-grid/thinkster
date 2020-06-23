import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { accounts, customers, orders } from '../../../../../data/data.json';
import { Customer, Order } from '../../../models';

interface Data extends Order {
  account: Account;
  customer: Customer;
}

@Component({
  templateUrl: './value-setter.component.html',
  styleUrls: ['./value-setter.component.scss'],
})
export class ValueSetterComponent {
  /**
   * The column definitions is an array of ColDef objects.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Customer Name',
      field: 'customer.name',
    },
    {
      headerName: 'Account',
      field: 'account.name',
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: [
          'Auto Loan Account',
          'Checking Account',
          'Credit Card Account',
          'Home Loan Account',
          'Investment Account',
          'Personal Loan Account',
          'Savings Account',
        ],
      },
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      valueParser: ({ newValue, oldValue }) =>
        isNaN(Number(newValue)) ? oldValue : Number(newValue),
    },
    {
      headerName: 'Address',
      valueGetter: ({ data }: { data: Data }) =>
        `${data.customer.address.street1}, ${data.customer.address.city}, ${data.customer.address.state} ${data.customer.address.zip}`,
      valueSetter: ({ data, newValue }: { data: Data; newValue: string }) => {
        const matches = newValue.match(
          /^([^,]+),\s{1}([^,]+),\s{1}([^,]+)\s{1}([0-9]{5}-?[0-9]{0,4})$/i
        );
        if (matches) {
          data.customer.address.street1 = matches[1];
          data.customer.address.city = matches[2];
          data.customer.address.state = matches[3];
          data.customer.address.zip = matches[4];
          return true;
        }
        return false;
      },
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      cellEditor: 'agPopupTextCellEditor',
      valueFormatter: ({ value }) => this.datePipe.transform(value, 'short'),
    },
  ];

  /** Default column definition. */
  defaultColDef: ColDef = {
    editable: true,
  };

  /**
   * Import orders from /data/data.json file and join with account and customer data.
   */
  rowData: Array<{ [key: string]: string | number | object }> = orders.map(
    (order) => ({
      ...order,
      account: accounts.find((account) => account.id === order.accountId),
      customer: customers.find((customer) => customer.id === order.customerId),
    })
  );

  constructor(private readonly datePipe: DatePipe) {}

  onCellValueChanged({ value }) {
    console.log(typeof value);
  }
}
