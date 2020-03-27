import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { DraggingComponent } from './dragging';
import { FullWidthComponent } from './full-width/full-width.component';
import { HeightComponent } from './height';
import { PinningComponent } from './pinning';
import { SortingComponent } from './sorting';
import { SpanningComponent } from './spanning';

const routes: Route[] = [
  {
    path: 'sorting',
    component: SortingComponent
  },
  {
    path: 'dragging',
    component: DraggingComponent
  },
  {
    path: 'spanning',
    component: SpanningComponent
  },
  {
    path: 'pinning',
    component: PinningComponent
  },
  {
    path: 'height',
    component: HeightComponent
  },
  {
    path: 'full-width',
    component: FullWidthComponent
  }
];

@NgModule({
  declarations: [
    DraggingComponent,
    FullWidthComponent,
    HeightComponent,
    PinningComponent,
    SortingComponent,
    SpanningComponent
  ],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [CurrencyPipe, DatePipe]
})
export class RowsModule {}
