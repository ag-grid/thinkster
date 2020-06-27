import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { accounts, customers, orders } from '../../../../../data/data.json';

@Component({
  templateUrl: './provided-editors.component.html',
  styleUrls: ['./provided-editors.component.scss'],
})
export class ProvidedEditorsComponent {
  /**
   * The column definitions is an array of ColDef objects.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Customer Name',
      field: 'customer.name',
      editable: true,
      cellEditor: 'agLargeTextCellEditor',
    },
    {
      headerName: 'Account',
      field: 'account.name',
      editable: true,
      cellEditor: 'agPopupSelectCellEditor',
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
      editable: true,
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      editable: ({ node }) => {
        const dateOfOrder = new Date(node.data.dateOfOrder);
        const today = new Date();
        return dateOfOrder < today;
      },
      valueFormatter: ({ value }) => this.datePipe.transform(value, 'short'),
    },
  ];

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
    console.log(value);
  }
}
