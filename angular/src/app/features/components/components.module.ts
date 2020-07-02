import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import {
  CurrencyRendererComponent,
  DateFilterComponent,
  SliderFilterComponent,
} from '../../shared/components';
import { SharedModule } from '../../shared/shared.module';
import { EditorComponent } from './editor';
import { FilterComponent } from './filter';
import { RendererComponent } from './renderer';

const routes: Routes = [
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'renderer',
    component: RendererComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
];

@NgModule({
  declarations: [EditorComponent, FilterComponent, RendererComponent],
  imports: [
    AgGridModule.withComponents([
      CurrencyRendererComponent,
      DateFilterComponent,
      SliderFilterComponent,
    ]),
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [CurrencyPipe],
})
export class ComponentsModule {}
