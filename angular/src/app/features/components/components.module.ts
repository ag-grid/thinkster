import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import {
  CurrencyRendererComponent,
  DateFilterComponent,
  MaterialHeaderComponent,
  SliderFilterComponent,
} from '../../shared/components';
import { SharedModule } from '../../shared/shared.module';
import { EditorComponent } from './editor';
import { FilterComponent } from './filter';
import { HeaderComponent } from './header/header.component';
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
  {
    path: 'header',
    component: HeaderComponent,
  },
];

@NgModule({
  declarations: [
    EditorComponent,
    FilterComponent,
    HeaderComponent,
    RendererComponent,
  ],
  imports: [
    AgGridModule.withComponents([
      CurrencyRendererComponent,
      DateFilterComponent,
      MaterialHeaderComponent,
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
