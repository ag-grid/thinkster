import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';

@Component({
  templateUrl: './spanning.component.html',
  styleUrls: ['./spanning.component.scss']
})
export class SpanningComponent {
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
      filter: 'agTextColumnFilter',
      cellClassRules: {
        'cell-span': ({ data }) => data && data.span > 0
      },
      cellRenderer: ({ data }) => {
        if (data.span === 0) {
          return null;
        }
        return `<div class="customer-cell">${data.customer.name}</div>`;
      },
      rowSpan: ({ data }) => data.span
    },
    {
      headerName: 'Account No',
      field: 'account.accountNumber',
      filter: 'agNumberColumnFilter'
    },
    {
      headerName: 'Product Name',
      field: 'product.name'
    }
  ];

  /**
   * Orders data for spanning.
   */
  rowData = [
    {
      account: {
        id: 680,
        customerId: 371,
        accountNumber: '74258750',
        name: 'Investment Account',
        amount: '681.80'
      },
      customer: {
        id: 371,
        name: 'Huel, Medhurst and Marvin',
        address: {
          street1: 'Zieme Oval',
          city: 'North Berthashire',
          state: 'Wisconsin',
          zip: '39526-7515'
        }
      },
      product: {
        id: 15,
        name: 'Generic Steel Tuna',
        price: '172.00',
        color: 'tan',
        details: 'Ergonomic',
        imageUrl: 'http://lorempixel.com/640/480'
      },
      span: 3
    },
    {
      product: {
        id: 112,
        name: 'Gorgeous Fresh Pants',
        price: '404.00',
        color: 'orange',
        details: 'Rustic',
        imageUrl: 'http://lorempixel.com/640/480'
      },
      span: 0
    },
    {
      product: {
        id: 29,
        name: 'Small Plastic Shirt',
        price: '805.00',
        color: 'yellow',
        details: 'Generic',
        imageUrl: 'http://lorempixel.com/640/480'
      },
      span: 0
    },
    {
      account: {
        id: 724,
        customerId: 395,
        accountNumber: '28490002',
        name: 'Investment Account',
        amount: '28.11'
      },
      customer: {
        id: 395,
        name: 'Lueilwitz - Champlin',
        address: {
          street1: 'Shanon Knoll',
          city: 'Eliezermouth',
          state: 'Michigan',
          zip: '41334-1820'
        }
      },
      product: {
        id: 91,
        name: 'Ergonomic Metal Table',
        price: '681.00',
        color: 'purple',
        details: 'Handcrafted',
        imageUrl: 'http://lorempixel.com/640/480'
      },
      span: 2
    },
    {
      product: {
        id: 155,
        name: 'Gorgeous Wooden Shoes',
        price: '382.00',
        color: 'turquoise',
        details: 'Generic',
        imageUrl: 'http://lorempixel.com/640/480'
      },
      span: 0
    }
  ];

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }
}
