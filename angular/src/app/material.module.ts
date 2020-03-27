import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

const modules = [MatButtonModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule {}
