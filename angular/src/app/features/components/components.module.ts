import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import {
  DateFilterComponent,
  SliderFilterComponent,
} from '../../shared/components';
import { SharedModule } from '../../shared/shared.module';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    path: 'filter',
    component: FilterComponent,
  },
];

@NgModule({
  declarations: [FilterComponent],
  imports: [
    AgGridModule.withComponents([DateFilterComponent, SliderFilterComponent]),
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [CurrencyPipe],
})
export class ComponentsModule {}
