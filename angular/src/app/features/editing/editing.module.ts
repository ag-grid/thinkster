import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { DefaultEditorComponent } from './default-editor';
import { ProvidedEditorsComponent } from './provided-editors';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultEditorComponent,
  },
  {
    path: 'editors',
    component: ProvidedEditorsComponent,
  },
];

@NgModule({
  declarations: [DefaultEditorComponent, ProvidedEditorsComponent],
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
