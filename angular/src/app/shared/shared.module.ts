import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import {
  ContentComponent,
  CurrencyRendererComponent,
  DateEditorComponent,
  DateFilterComponent,
  MaterialHeaderComponent,
  SliderFilterComponent,
} from './components';
import { TitleDirective } from './directives';

const directives = [
  ContentComponent,
  CurrencyRendererComponent,
  DateEditorComponent,
  DateFilterComponent,
  MaterialHeaderComponent,
  TitleDirective,
  SliderFilterComponent,
];

@NgModule({
  declarations: [...directives],
  entryComponents: [DateEditorComponent],
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [...directives],
})
export class SharedModule {}
