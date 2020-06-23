import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialModule } from '../../material.module';
import { SharedModule } from '../../shared/shared.module';
import { DefaultEditorComponent } from './default-editor';
import { ProvidedEditorsComponent } from './provided-editors';
import { ValueParserComponent } from './value-parser';
import { ValueSetterComponent } from './value-setter';

const routes: Routes = [
  {
    path: 'default',
    component: DefaultEditorComponent,
  },
  {
    path: 'editors',
    component: ProvidedEditorsComponent,
  },
  {
    path: 'value-parser',
    component: ValueParserComponent,
  },
  {
    path: 'value-setter',
    component: ValueSetterComponent,
  },
];

@NgModule({
  declarations: [
    DefaultEditorComponent,
    ProvidedEditorsComponent,
    ValueParserComponent,
    ValueSetterComponent,
  ],
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
