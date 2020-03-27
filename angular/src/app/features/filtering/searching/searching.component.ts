import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColDef, GridApi } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { customers } from '../../../../../data/data.json';
import { Customer } from '../../../models';

@Component({
  templateUrl: './searching.component.html',
  styleUrls: ['./searching.component.scss']
})
export class SearchingComponent implements OnDestroy, OnInit {
  /**
   * The column definitions is an array of ColDef objects.
   */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'City', valueGetter: ({ data }) => data.address.city },
    {
      headerName: 'Address',
      resizable: true,
      cellRenderer: ({ data }: { data: Customer }) =>
        `${data.address.street1} ${data.address.city}, ${data.address.state} ${data.address.zip}`,
      getQuickFilterText: ({ data }) => {
        return `${data.address.street1} ${data.address.city} ${data.address.state} ${data.address.zip}`;
      }
    }
  ];

  /**
   * Import customers from /data/data.json file
   */
  customers: Array<{ [key: string]: string | number | object }> = customers;

  /** Search query. */
  q = new FormControl('');

  /** Unsubscribe from observables when the component is destroyed. */
  private destroy = new Subject();

  /** The ag-Grid Grid API. */
  private gridApi: GridApi;

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.unsubscribe();
  }

  ngOnInit(): void {
    this.q.valueChanges
      .pipe(takeUntil(this.destroy))
      .subscribe(value => this.gridApi.setQuickFilter(value));
  }

  onGridReady({ api }: { api: GridApi }) {
    this.gridApi = api;
  }
}
