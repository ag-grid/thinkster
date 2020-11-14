import { Component } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { IHeaderParams } from 'ag-grid-community';

@Component({
  templateUrl: './material-header.component.html',
  styleUrls: ['./material-header.component.scss'],
})
export class MaterialHeaderComponent implements IHeaderAngularComp {
  /** The column header display name. */
  displayName: string;

  /** Boolean indicating if sorting is enabled. */
  enableSorting: boolean;

  /** The header component parameters. */
  private params: IHeaderParams;

  agInit(params: IHeaderParams): void {
    this.displayName = params.displayName;
    this.enableSorting = params.enableSorting;
    this.params = params;
  }

  isSortAscending(): boolean {
    return this.params.column.isSortAscending();
  }

  isSortDescending(): boolean {
    return this.params.column.isSortDescending();
  }

  isSortNone(): boolean {
    return this.params.column.isSortNone();
  }

  onSort(direction: string, event: MouseEvent): void {
    this.params.setSort(direction, event.shiftKey);
  }

  refresh(params: IHeaderParams): boolean {
    this.displayName = params.displayName;
    this.enableSorting = params.enableSorting;
    this.params = params;
    // return false to let ag-grid refresh the component via destroying and creating it
    return true;
  }
}
