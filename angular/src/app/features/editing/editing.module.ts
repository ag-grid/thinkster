import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { DefaultEditorComponent } from './default-editor';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultEditorComponent,
  },
];

@NgModule({
  declarations: [DefaultEditorComponent],
  imports: [
    AgGridModule.withComponents([]),
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [DatePipe],
})
export class EditingModule {}
