import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { ColumnApiComponent } from './column-api';
import { FilteringComponent } from './filtering';
import { GridApiComponent } from './grid-api';
import { RowSelectionComponent } from './row-selection';
import { SortingComponent } from './sorting';

const routes: Routes = [
  {
    path: 'sorting',
    component: SortingComponent
  },
  {
    path: 'filtering',
    component: FilteringComponent
  },
  {
    path: 'row-selection',
    component: RowSelectionComponent
  },
  {
    path: 'grid-api',
    component: GridApiComponent
  },
  {
    path: 'column-api',
    component: ColumnApiComponent
  }
];

@NgModule({
  declarations: [
    ColumnApiComponent,
    FilteringComponent,
    GridApiComponent,
    SortingComponent,
    RowSelectionComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class GettingStartedModule {}
