import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import {
  ContentComponent,
  DateFilterComponent,
  SliderFilterComponent,
} from './components';
import { TitleDirective } from './directives';

const directives = [
  ContentComponent,
  DateFilterComponent,
  TitleDirective,
  SliderFilterComponent,
];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [...directives],
})
export class SharedModule {}
