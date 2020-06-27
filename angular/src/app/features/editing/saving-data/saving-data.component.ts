import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

import { CustomerService } from '../../../services';

@Component({
  templateUrl: './saving-data.component.html',
  styleUrls: ['./saving-data.component.scss'],
})
export class SavingDataComponent {
  /**
   * The column definitions is an array of ColDef objects.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' },
  ];

  /** customers. */
  customers = this.customerService.fetch();

  /** Default column definition. */
  defaultColDef: ColDef = {
    editable: true,
  };

  constructor(private readonly customerService: CustomerService) {}

  onCellEditingStopped(event): void {
    console.log(event);
  }

  onCellValueChanged({ data }): void {
    // this.customerService.update(data.id, data).subscribe();
  }

  onRowValueChanged({ data }): void {
    // this.customerService.update(data.id, data).subscribe();
  }
}
