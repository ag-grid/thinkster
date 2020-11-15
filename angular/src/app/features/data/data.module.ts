import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { AsyncComponent } from './async/async.component';
import { CellRenderingComponent } from './cell-rendering';
import { DeltaComponent } from './delta';
import { InfiniteComponent } from './infinite';
import { SimpleComponent } from './simple';
import { UpdatingComponent } from './updating';
import { ValueGetterComponent } from './value-getter';
import { ImmutableComponent } from './immutable/immutable.component';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleComponent,
  },
  {
    path: 'async',
    component: AsyncComponent,
  },
  {
    path: 'value-getter',
    component: ValueGetterComponent,
  },
  {
    path: 'cell-rendering',
    component: CellRenderingComponent,
  },
  {
    path: 'updating',
    component: UpdatingComponent,
  },
  {
    path: 'delta',
    component: DeltaComponent,
  },
  {
    path: 'immutable',
    component: ImmutableComponent,
  },
  {
    path: 'infinite',
    component: InfiniteComponent,
  },
];

@NgModule({
  declarations: [
    AsyncComponent,
    CellRenderingComponent,
    DeltaComponent,
    ImmutableComponent,
    InfiniteComponent,
    SimpleComponent,
    UpdatingComponent,
    ValueGetterComponent,
  ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
})
export class DataModule {}
