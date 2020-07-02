import { Component, OnDestroy } from '@angular/core';
import { ColDef, GridApi, IDatasource } from 'ag-grid-community';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { CustomerService } from '../../../services';

@Component({
  templateUrl: './infinite.component.html',
  styleUrls: ['./infinite.component.scss'],
})
export class InfiniteComponent implements OnDestroy {
  /** The infinite row model block size. */
  cacheBlockSize = 20;

  /** Column definitions. */
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Catch Phrase', field: 'catchPhrase' },
    { headerName: 'Street', field: 'address.street1' },
    { headerName: 'City', field: 'address.city' },
    { headerName: 'State', field: 'address.state' },
    { headerName: 'Zip', field: 'address.zip' },
  ];

  /** Infinite row model datasource. */
  dataSource: IDatasource = {
    getRows: ({ startRow, endRow, successCallback, failCallback }) =>
      this.customerService
        .slice(startRow, endRow)
        .pipe(takeUntil(this.destroy))
        .subscribe(
          ({ customers, totalCount }) => successCallback(customers, totalCount),
          (error) => failCallback()
        ),
    destroy: () => this.destroy.next(),
  };

  /** The initial row count for infinite row model. */
  infiniteInitialRowCount = 20;

  /** Unsubscribe from observable streams when the component is destroyed or when the infinite scroll datasource is destoyed. */
  private destroy = new Subject<void>();

  constructor(private readonly customerService: CustomerService) {}

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  onGridReady({ api }: { api: GridApi }) {
    api.sizeColumnsToFit();
    api.setDatasource(this.dataSource);
  }
}
