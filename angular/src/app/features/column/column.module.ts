import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '../../shared/shared.module';
import { DefaultComponent } from './default';
import { MovingComponent } from './moving';
import { PinningComponent } from './pinning';
import { SizingComponent } from './sizing';
import { TypesComponent } from './types';

const routes: Route[] = [
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'types',
    component: TypesComponent
  },
  {
    path: 'moving',
    component: MovingComponent
  },
  {
    path: 'sizing',
    component: SizingComponent
  },
  {
    path: 'pinning',
    component: PinningComponent
  }
];

@NgModule({
  declarations: [
    DefaultComponent,
    MovingComponent,
    PinningComponent,
    SizingComponent,
    TypesComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [DatePipe]
})
export class ColumnModule {}
