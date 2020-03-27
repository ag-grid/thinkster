import { Component } from '@angular/core';
import { ColDef, GridApi } from 'ag-grid-community';
import { CustomerService } from 'src/app/services';

@Component({
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent {
  /**
   * The column definitions is an array of ColDef objects.
   * headerName: The name to render in the column header.
   *             If not specified and field is specified, the field name would be used as the header name.
   * field: The field of the row to get the cells data from.
   * sortable: Set to true to allow sorting on this column.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' }
  ];

  /** customers. */
  customers = this.customerService.fetch();

  constructor(private readonly customerService: CustomerService) {}

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
  }
}
