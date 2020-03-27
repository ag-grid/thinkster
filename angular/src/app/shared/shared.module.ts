import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContentComponent } from './components';
import { TitleDirective } from './directives';

const directives = [ContentComponent, TitleDirective];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [...directives]
})
export class SharedModule {}
