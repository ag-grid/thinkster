import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { accounts, customers, orders } from '../../../../../data/data.json';

@Component({
  templateUrl: './value-parser.component.html',
  styleUrls: ['./value-parser.component.scss'],
})
export class ValueParserComponent {
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
