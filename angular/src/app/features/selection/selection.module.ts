import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { RowComponent } from './row';

const routes: Routes = [
  {
    path: 'row',
    component: RowComponent,
  },
];

@NgModule({
  declarations: [RowComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [CurrencyPipe, DatePipe],
})
export class SelectionModule {}
