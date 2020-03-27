import { AgGridModule } from 'ag-grid-angular';

import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { CellComponent } from './cell';
import { CssOverridesComponent } from './css-overrides';
import { RowComponent } from './row';
import { ThemesComponent } from './themes';

const routes: Routes = [
  {
    path: 'cell',
    component: CellComponent
  },
  {
    path: 'row',
    component: RowComponent
  },
  {
    path: 'themes',
    component: ThemesComponent
  },
  {
    path: 'css-overrides',
    component: CssOverridesComponent
  }
];

@NgModule({
  declarations: [
    CellComponent,
    CssOverridesComponent,
    RowComponent,
    ThemesComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [CurrencyPipe, DatePipe]
})
export class StylingModule {}
