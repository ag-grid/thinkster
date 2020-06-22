import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { accounts, customers, orders } from '../../../../../data/data.json';

@Component({
  templateUrl: './default-editor.component.html',
  styleUrls: ['./default-editor.component.scss'],
})
export class DefaultEditorComponent {
  /**
   * The column definitions is an array of ColDef objects.
   */
  columnDefs: ColDef[] = [
    {
      headerName: 'Customer Name',
      field: 'customer.name',
      editable: true,
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      type: 'nonEditableColumn',
    },
    {
      headerName: 'Date of Order',
      field: 'dateOfOrder',
      type: ['nonEditableColumn', 'dateColumn'],
      editable: ({ node }) => {
        const dateOfOrder = new Date(node.data.dateOfOrder);
        const today = new Date();
        return dateOfOrder < today;
      },
      cellEditor: 'agPopupTextCellEditor',
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
